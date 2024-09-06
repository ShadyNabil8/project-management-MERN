import { listsData, spacesData, workspacesData } from "../assets/data";
import api, { LOGIN_ROUTE, GET_USER_ROUTE, GET_WORKSPACES_ROUTE } from "./api";

export const getUser = async function () {
  try {
    const response = await api.get(GET_USER_ROUTE);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    throw error;
  }
};

export const fetchWorkspaces = async () => {
  try {
    const response = await api.get(GET_WORKSPACES_ROUTE);
    return response.data.workspacesDocuments;
  } catch (error) {
    console.error("Error fetching workspaces:", error.message);
    throw error;
  }
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
  const workspace = await api.get(GET_WORKSPACES_ROUTE, {
    params: { workspaceId: workspaceId },
  });
  return workspace.data.workspacesDocuments || null;
};

export const fetchSpace = async (spaceId) => {
  console.log("Inside fetchSpace");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const space = spacesData.find((space) => space.id == spaceId);

  return space;
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
