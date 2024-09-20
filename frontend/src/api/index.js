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
    throw error;
  }
};

export const fetchWorkspace = async (workspaceId) => {
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

    throw error;
  }
};

export const fetchSpaces = async (workspaceId) => {
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
    throw error;
  }
};

export const fetchSpace = async (workspaceId, spaceId) => {
  try {
    const response = await api.get("/space", {
      params: { workspaceId, spaceId },
    });
    return response.data.spacesDocuments[0];
  } catch (error) {
    console.error(
      "Error fetching space:",
      error.response?.data?.message ||
        `Something wrong in fetching space: ${error}`,
    );
    throw error;
  }
};

export const fetchLists = async (spaceId) => {
  console.log("Inside fetchLists");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const lists = listsData.filter((list) => list.spaceId == spaceId);
  return lists;
};

export const fetchList = async (listId) => {
  console.log("Inside fetchList");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const list = listsData.find((list) => list.id == listId);
  return list;
};

export const fetchUser = async (token) => {
  console.log("Inside fetchList");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const list = listsData.find((list) => list.id == listId);
  return list;
};

export const authService = async (email, password) => {
  try {
    const response = await api.post(LOGIN_ROUTE, {
      email: "email1@gmail.com",
      password: "email1",
    });
    return response.data;
  } catch (error) {
    console.log(error);
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
