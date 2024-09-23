import React from "react";
import SelectedWorkspace from "./SelectedWorkspace";
import WorkspaceList from "./WorkspaceList";
import Workspace from "./Workspace";
import Option from "./Option";
import { IoAdd } from "react-icons/io5";
import OptionsContainer from "./OptionsContainer";
import { useNavigate, useParams } from "react-router-dom";

const WorkspacePanel = ({ workspaces, setIsPanelVisible }) => {
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  return (
    <OptionsContainer
      customStyle="left-3 top-11 z-10 mt-3 min-w-64 p-2"
      setIsPanelVisible={setIsPanelVisible}
    >
      <SelectedWorkspace></SelectedWorkspace>
      <WorkspaceList>
        {workspaces.map((workspace, index) =>
          workspace._id !== workspaceId ? (
            <Workspace
              key={index}
              workspace={workspace}
              //   toggleList={toggleList}
            ></Workspace>
          ) : null,
        )}
      </WorkspaceList>
      <Option
        option={{
          image: <IoAdd />,
          title: "New Workspace",
          action: () => navigate("/workspace-setup"),
        }}
      ></Option>
    </OptionsContainer>
  );
};

export default WorkspacePanel;
