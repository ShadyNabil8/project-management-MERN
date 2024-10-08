import { listsData } from "../assets/data";
import api, { LOGIN_ROUTE, REFRESH_TOKEN_ROUTE } from "./api";

export const fetchWorkspaces = async () => {
  try {
    const response = await api.get("/workspace");
    return response.data.workspacesDocuments;
  } catch (error) {
    console.error(
      "Error fetching workspaces:",
      error.response?.data?.message ||
        `Something wrong in fetching workspaces: ${error}`,
    );
  }
};

export const getWorkspace = async (workspaceId) => {
  try {
    const response = await api.get("/workspace", {
      params: { workspaceId },
    });
    return response.data.workspacesDocuments[0];
  } catch (error) {
    console.error(
      "Error fetching workspace:",
      error.response?.data?.message ||
        `Something wrong in fetching workspace: ${error}`,
    );
  }
};

export const getSpaces = async (workspaceId) => {
  try {
    const response = await api.get("/space", {
      params: { workspaceId },
    });
    return response.data.spacesDocuments;
  } catch (error) {
    console.error(
      "Error fetching spaces:",
      error.response?.data?.message ||
        `Something wrong in fetching spaces: ${error}`,
    );
  }
};

export const getSpace = async (spaceId) => {
  try {
    const response = await api.get("/space", {
      params: { spaceId },
    });
    return response.data.spaces?.[0] || null;
  } catch (error) {
    console.error(
      "Error fetching space:",
      error.response?.data?.message ||
        `Something wrong in fetching space: ${error}`,
    );
    return null;
  }
};

export const getLists = async (spaceId) => {
  console.log("Inside fetchLists");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const lists = listsData.filter((list) => list.spaceId == spaceId);
  return lists;
};

export const getList = async (listId) => {
  try {
    const response = await api.get("/list", {
      params: { listId },
    });
    return response.data.lists?.[0] || null;
  } catch (error) {
    console.log(error);
    console.error(
      "Error fetching list:",
      error.response?.data?.message ||
        `Something wrong in fetching list: ${error}`,
    );
    return null;
  }
};

export const refreshToken = async () => {
  try {
    const response = await api.post(REFRESH_TOKEN_ROUTE);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
