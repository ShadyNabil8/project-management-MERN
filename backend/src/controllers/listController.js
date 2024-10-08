const listModel = require("../models/listModel");
const spaceModel = require("../models/spaceModel");
const workspaceModel = require("../models/workspaceModel");
const { body, validationResult } = require("express-validator");
const { delay } = require("../utils/utils");

const getList = async (req, res, next) => {
  try {
    await delay(1000);

    const { spaceId, listId } = req.query;

    // Ensure at least one identifier is provided
    if (!listId && !spaceId) {
      return res.status(400).json({
        message: "Please provide either a listId or spaceId to retrieve list.",
      });
    }

    let listsDocuments = [];

    if (listId) {
      // Fetch list by ID
      const listDocument = await listModel
        .findById(listId)
        .populate({
          path: "space",
          select: "name",
        })
        .lean();
      if (!listDocument) {
        return res.status(404).json({
          message: `List with ID ${listId} not found.`,
        });
      }
      listsDocuments = [listDocument]; // Ensure consistency by wrapping in array
    } else if (spaceId) {
      // Fetch lists by workspace ID
      listsDocuments = await listModel.find({ space: spaceId }).lean();
    }
    console.log(listsDocuments[0]);

    // Return the found spaces
    return res.status(200).json({
      message: "Lists retrieved successfully",
      lists: listsDocuments,
    });
  } catch (error) {
    return next(error);
  }
};

const createList = [
  body("listName").isLength({ min: 1 }).withMessage("List name is required"),
  async (req, res, next) => {
    try {
      await delay(1000);
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
      }

      const { listName, spaceId, workspaceId } = req.body;

      //  Check if workspace & space exist
      const [workspace, space] = await Promise.all([
        workspaceModel.findById(workspaceId),
        spaceModel.findById(spaceId),
      ]);

      if (!workspace) {
        return res.status(404).json({ message: "Workspace not found" });
      }
      if (!space) {
        return res.status(404).json({ message: "Space not found" });
      }

      // Create and save the list
      const newList = new listModel({
        name: listName,
        space: spaceId,
      });

      const savedList = await newList.save();

      //  Return the created space in the response
      res
        .status(201)
        .json({ message: "List created successfully", list: savedList });
    } catch (error) {
      next(error);
    }
  },
];

module.exports = { createList, getList };
