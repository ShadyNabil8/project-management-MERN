import { createBrowserRouter, Link, redirect } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import { workspacesData } from "../assets/data";
import WorkspaceHome from "../components/WorkspaceHome";
import WorkspaceInbox from "../components/WorkspaceInbox";
import WorkspaceDashboards from "../components/WorkspaceDashboards";
import SpaceDetails from "../components/SpaceDetails";
import ListDetails from "../components/ListDetails";
const isAuthenticated = () => {
  return true;
};

const authLoader = () => {
  if (!isAuthenticated()) {
    return redirect("/login");
  }
  return null;
};

const redirectLoader = () => {
  if (!isAuthenticated()) {
    return redirect("/login");
  }

  return redirect(`/${workspacesData[0].id}/home`);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome</div>,
    loader: redirectLoader,
  },
  {
    path: "/:workspaceId",
    element: <RootLayout />,
    loader: authLoader,
    children: [
      {
        path: "/:workspaceId/home",
        element: <WorkspaceHome />,
        loader: authLoader,
      },
      {
        path: "/:workspaceId/inbox",
        element: <WorkspaceInbox />,
        loader: authLoader,
      },
      {
        path: "/:workspaceId/dashboards",
        element: <WorkspaceDashboards />,
        loader: authLoader,
      },
      {
        path: "/:workspaceId/space/:spaceId",
        element: <SpaceDetails />,
        loader: authLoader,
      },
      {
        path: "/:workspaceId/space/:spaceId/list/:listId",
        element: <ListDetails />,
        loader: authLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login page</div>,
  },
]);

export default router;
