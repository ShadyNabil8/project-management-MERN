import { workspacesData } from "../assets/data";

export const fetchWorkspaces = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return workspacesData;
};
