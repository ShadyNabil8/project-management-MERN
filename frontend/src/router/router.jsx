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
import SignupPage from "../pages/SignupPage";
import ValidateEmailPage from "../pages/ValidateEmailPage";
import JoinTeamPage from "../pages/JoinTeamPage";
import WorkspaceInvitationsRoute from "../components/WorkspaceInvitationsRoute";
import NotFoundTeamPage from "../pages/NotFoundTeamPage";
import WorkspaceSettingsPage from "../pages/WorkspaceSettingsPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    element: <IndexRoute />,
  },
  {
    path: "/:workspaceId",
    element: <IndexRoute />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <WorkspaceInvitationsRoute />,
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
          {
            path: "/:workspaceId/settings",
            element: <WorkspaceSettingsPage />,
          },
        ],
      },
      {
        path: "/workspace-setup",
        element: <CreateWorkspace />,
      },
      {
        path: "/verify-email",
        element: <ValidateEmailPage />,
      },
      {
        path: "/join-team",
        element: <JoinTeamPage />,
      },
      {
        path: "/not-found-team",
        element: <NotFoundTeamPage />,
      },
    ],
  },
]);

export default router;
