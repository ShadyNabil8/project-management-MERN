const spaceModel = require("../models/spaceModel");
const { delay } = require("../utils/utils");

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

module.exports = { fetchSpaces };
