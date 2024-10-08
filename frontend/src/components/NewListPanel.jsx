import React, { useState } from "react";
import OptionsContainer from "./OptionsContainer";
import FormField from "./FormField";
import ButtonLoading from "./ButtonLoading";
import { useParams } from "react-router-dom";
import { space } from "postcss/lib/list";
import useNotifier from "../hooks/useNotifier";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

const NewListPanel = ({ setIsPanelVisible, spaceIdOfNewList }) => {
  const [listName, setListName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { workspaceId } = useParams();
  const notify = useNotifier();
  const { setUser } = useAuth();

  const createList = async () => {
    try {
      setLoading(true);

      const nameError = !listName ? "List name is required" : null;

      setError(nameError);

      if (!nameError) {
        const response = await api.post("/list/create", {
          listName,
          spaceId: spaceIdOfNewList,
          workspaceId,
        });
        console.log(response);

        // Add this new list to the current user data.
        setUser((prev) => ({
          ...prev,
          workspaces: prev.workspaces.map((workspace) =>
            workspace._id === workspaceId
              ? {
                  ...workspace,
                  spaces: workspace.spaces.map((space) =>
                    space._id === spaceIdOfNewList
                      ? {
                          ...space,
                          lists: [...space.lists, response.data.list],
                        }
                      : space,
                  ),
                }
              : workspace,
          ),
        }));
        setIsPanelVisible(false);
      }
    } catch (error) {
      console.log(error);

      notify.error(error.response?.data?.message || "Something wrong happened");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OptionsContainer
      customStyle="fixed above-center w-full sm:w-[580px] p-5 "
      setIsPanelVisible={setIsPanelVisible}
      darkBackground={true}
    >
      <div className="mb-[64px] flex flex-col gap-5">
        <div>
          <p className="text-lg font-bold text-text-color-light dark:text-text-color-dark">
            Create List
          </p>
          <p className="text-[14px] text-text-color-light-lite dark:text-text-color-dark-lite">
            A List represents major departments or organizations, each with its
            own workflows, settings, and integrations.
          </p>
        </div>

        <FormField
          type={"text"}
          label={"Name"}
          error={error}
          value={listName}
          placeholder={"eg. Marketing, Engineering, HR"}
          handleOnChange={(e) => setListName(e.target.value)}
        />
      </div>

      <div className="bg-bg-color-light-2 absolute inset-x-0 bottom-0 flex h-[64px] items-center justify-end rounded-b-xl px-5 dark:bg-bg-color-dark-1">
        <button
          style={loading ? { pointerEvents: "none" } : {}}
          className="flex h-[35px] w-[100px] shrink-0 items-center justify-center rounded-md bg-[#589eca] text-[14px] text-white transition-colors hover:bg-[#66B8EB]"
          onClick={createList}
        >
          {loading ? <ButtonLoading /> : "Create List"}
        </button>
      </div>
    </OptionsContainer>
  );
};

export default NewListPanel;
