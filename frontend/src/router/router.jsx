import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import WorkspaceHome from "../components/WorkspaceHome";
import WorkspaceInbox from "../components/WorkspaceInbox";
import WorkspaceDashboards from "../components/WorkspaceDashboards";
import SpaceDetails from "../components/SpaceDetails";
import ListDetails from "../components/ListDetails";
import LoginPage from "../pages/LoginPage";
import IndexRoute from "../components/IndexRoute";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateWorkspace from "../pages/CreateWorkspace";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/",
    element: <IndexRoute />,
  },
  {
    path: "/:workspaceId", // I treat this as index route because there is nothing without workspace
    element: <IndexRoute />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/:workspaceId/home",
            element: <WorkspaceHome />,
          },
          {
            path: "/:workspaceId/inbox",
            element: <WorkspaceInbox />,
          },
          {
            path: "/:workspaceId/dashboards",
            element: <WorkspaceDashboards />,
          },
          {
            path: "/:workspaceId/space/:spaceId",
            element: <SpaceDetails />,
          },
          {
            path: "/:workspaceId/space/:spaceId/list/:listId",
            element: <ListDetails />,
          },
        ],
      },
    ],
  },
  {
    path: "/team-setup",
    element: <CreateWorkspace />,
  },
]);

export default router;
