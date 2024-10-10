import React, { useEffect, useState } from "react";
import Space from "./Space";
import Option from "./Option";
import { useParams } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";
import { IoAdd } from "react-icons/io5";
import NewSpacePanel from "./NewSpacePanel";
import clsx from "clsx";
import NewListPanel from "./NewListPanel";

const Spaces = () => {
  const { workspaceId } = useParams();
  const [isVisibleSpaces, setIisVisibleSpaces] = useState(false);
  const [isNewSpacePanelVisible, setIsNewSpacePanelVisible] = useState(false);
  const [isNewListPanelisible, setIsNewListPanelisible] = useState(false);
  const [spaceIdOfNewList, setSpaceIdOfNewList] = useState(null);
  const { user } = useAuth();

  const spaces =
    user.workspaces.find((workspace) => workspace._id === workspaceId)
      ?.spaces || [];

  return (
    <div className="flex flex-col items-center justify-center p-3 lg:items-start">
      <div
        className="block cursor-pointer rounded-md bg-[#ceeafd] p-1 lg:hidden dark:bg-[#224D6B]"
        onClick={() => setIisVisibleSpaces((prev) => !prev)}
      >
        <CiGrid41 className="text-[20px] text-[#046eb0] dark:text-[#ceeafd]" />
      </div>
      <div
        className={clsx(
          "absolute left-[50px] top-[40px] h-[calc(100%-40px)] min-w-[300px] transform bg-[#F7F8F9] p-2 shadow-[4px_0_8px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out lg:static lg:w-full lg:min-w-fit lg:translate-x-0 lg:p-0 lg:shadow-none dark:bg-bg-color-dark-2",
          isVisibleSpaces ? "-translate-x-[calc(100%+50px)]" : "translate-x-0",
        )}
      >
        <span className="mb-1 block text-[13px] text-text-color-light dark:text-text-color-dark">
          Spaces
        </span>
        <div className="flex flex-col gap-[2px]">
          {spaces.map((space, index) => (
            <Space
              name={space.name}
              id={space._id}
              lists={space.lists}
              setIsNewListPanelisible={setIsNewListPanelisible}
              setSpaceIdOfNewList={setSpaceIdOfNewList}
              key={index}
            ></Space>
          ))}
        </div>
        <Option
          title="Create Space"
          image={<IoAdd />}
          action={() => setIsNewSpacePanelVisible(true)}
        />
      </div>
      {isNewSpacePanelVisible && (
        <NewSpacePanel setIsPanelVisible={setIsNewSpacePanelVisible} />
      )}
      {isNewListPanelisible && (
        <NewListPanel
          setIsPanelVisible={setIsNewListPanelisible}
          spaceIdOfNewList={spaceIdOfNewList}
        />
      )}
    </div>
  );
};

export default Spaces;
