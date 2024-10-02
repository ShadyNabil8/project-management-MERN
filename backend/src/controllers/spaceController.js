const spaceModel = require("../models/spaceModel");
const taskStatusModel = require("../models/taskStatusModel");
const workspaceModel = require("../models/workspaceModel");
const { delay } = require("../utils/utils");
const { body, validationResult } = require("express-validator");

const fetchSpaces = async (req, res, next) => {
  try {
    await delay(1000);

    const { workspaceId, spaceId } = req.query;

    if (!workspaceId) {
      return res.status(400).json({
        message: "No workspace id provided",
      });
    }

    let spacesDocuments;

    if (spaceId) {
      const spaceDocument = await spaceModel
        .findById(spaceId, { workspaceId: 1, name: 1 })
        .lean();
      if (!spaceDocument) {
        return res.status(404).json({
          message: "Space not found",
        });
      }
      spacesDocuments = [spaceDocument]; // Wrap in an array for consistency
    } else {
      spacesDocuments = await spaceModel.find({ workspaceId }).lean();
      if (!spacesDocuments || spacesDocuments.length === 0) {
        return res.status(404).json({
          message: "No spaces found",
        });
      }
    }

    return res.status(200).json({
      spacesDocuments,
    });
  } catch (error) {
    next(error);
  }
};

const createSpace = [
  body("spaceName").isLength({ min: 1 }).withMessage("Space name is required"),
  async (req, res, next) => {
    try {
      await delay(1000);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
      }

      const { spaceName, spaceDescription, taskStatuses, workspaceId } =
        req.body;

      //  Check if workspace exists
      const workspace = await workspaceModel.findById(workspaceId);
      if (!workspace) {
        return res.status(404).json({ message: "Workspace not found" });
      }

      // Create and save task statuses for each category
      const savedTaskStatuses = {};

      for (const [statusCategory, statuses] of Object.entries(taskStatuses)) {
        // Insert task statuses for each category
        const createdStatuses = await taskStatusModel.insertMany(statuses);
        // Store the created task status IDs
        savedTaskStatuses[statusCategory] = createdStatuses.map(
          (status) => status._id
        );
      }

      // Create and save the space with references to the task status IDs
      const newSpace = new spaceModel({
        name: spaceName,
        description: spaceDescription,
        workspaceId,
        taskStatuses: savedTaskStatuses, // Reference to task status IDs
      });

      const savedSpace = await newSpace.save();

      console.log(savedSpace);

      //  Return the created space in the response
      res
        .status(201)
        .json({ message: "Space created successfully", space: savedSpace });
    } catch (error) {
      next(error);
    }
  },
];

module.exports = { fetchSpaces, createSpace };
