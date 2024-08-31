import { listsData, spacesData, workspacesData } from "../assets/data";

export const fetchWorkspaces = async () => {
  console.log("Inside fetchWorkspaces");

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return workspacesData;
};

export const fetchSpaces = async (workspaceId) => {
  console.log("Inside fetchSpaces");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const spaces = spacesData.filter((space) => space.workspaceId == workspaceId);
  return spaces;
};

export const fetchLists = async (spaceId) => {
  console.log("Inside fetchLists");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const lists = listsData.filter((list) => list.spaceId == spaceId);
  return lists;
};

export const fetchWorkspace = async (workspaceId) => {
  console.log("Inside fetchWorkspace");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const workspace = workspacesData.find(
    (workspace) => workspace.id == workspaceId,
  );
  return workspace;
};
