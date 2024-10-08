const spaceModel = require("../models/spaceModel");
const taskStatusModel = require("../models/taskStatusModel");
const workspaceModel = require("../models/workspaceModel");
const { delay } = require("../utils/utils");
const { body, validationResult } = require("express-validator");

const getSpaces = async (req, res, next) => {
  try {
    await delay(1000);

    const { workspaceId, spaceId } = req.query;

    // Ensure at least one identifier is provided
    if (!workspaceId && !spaceId) {
      return res.status(400).json({
        message:
          "Please provide either a workspaceId or spaceId to retrieve spaces.",
      });
    }

    let spacesDocuments;

    if (spaceId) {
      // Fetch space by ID
      const spaceDocument = await spaceModel.findById(spaceId).lean();
      if (!spaceDocument) {
        return res.status(404).json({
          message: `Space with ID ${spaceId} not found.`,
        });
      }
      spacesDocuments = [spaceDocument]; // Ensure consistency by wrapping in array
    } else if (workspaceId) {
      // Fetch spaces by workspace ID
      spacesDocuments = await spaceModel.find({ workspaceId }).lean();
    }

    // Return the found spaces
    return res.status(200).json({
      message: "Spaces retrieved successfully",
      spaces: spacesDocuments,
    });
  } catch (error) {
    return next(error);
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
        owner: req.user._id,
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

module.exports = { getSpaces, createSpace };
