import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ButtonLoading from "../components/ButtonLoading";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "react-multi-email/dist/style.css";
import api from "../api/api";
import InputError from "../components/InputError";
import useNotifier from "../hooks/useNotifier";

const MAX_STAGE = 2;

const CreateWorkspace = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [stage, setStage] = useState(1);
  const [workspaceData, setWorkspaceData] = useState({
    invitedMembers: [],
    workspaceName: `${user.fullName}'s workspace`,
  });
  const [errors, setErrors] = useState({
    workspaceName: null,
  });

  const navigate = useNavigate();
  const notify = useNotifier();

  const handleCreateWorkspace = async () => {
    setLoading(true);
    try {
      const response = await api.post("/workspace/create", {
        name: workspaceData.workspaceName,
        invitedMembers: workspaceData.invitedMembers,
      });
      navigate(`/${response.data.workspaceId}/home`);
    } catch (error) {
      notify.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleNextStage = (e) => {
    if (stage < MAX_STAGE) {
      let isError = false;
      if (stage === 1) {
        if (!workspaceData.workspaceName) {
          isError = true;
          setErrors((prev) => ({
            ...prev,
            workspaceName: "Workspace name is required!",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            workspaceName: null,
          }));
        }
      }
      if (!isError) {
        setStage((prev) => prev + 1);
      }
    } else {
      handleCreateWorkspace();
    }
  };

  const handlePrevStage = (e) => {
    if (stage > 1) {
      setStage((prev) => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const onWorkspaceNameChange = (e) => {
    setWorkspaceData((prev) => ({
      ...prev,
      workspaceName: e.target.value,
    }));
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="h-screen w-screen bg-layout bg-no-repeat blur-md brightness-75"></div>
      <div className="absolute left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-10 md:h-[650px] md:w-[65%] xl:w-[900px]">
        <div className="flex flex-col">
          <div className="self-end text-xl font-bold text-text-color-light">
            Welcome {`${user.fullName}!`}
          </div>
          <div className="absolute top-1/3 flex -translate-y-1/3 flex-col items-center justify-center self-center">
            <div className="mb-[60px] flex flex-col items-center text-3xl font-black text-text-color-light md:text-4xl">
              {stage === 1 ? (
                <>
                  <p>What would you like to</p>
                  <p>name your Workspace?</p>
                </>
              ) : (
                <>
                  <p>Invite people to your</p>
                  <p>Workspace:</p>
                </>
              )}
            </div>

            {stage === 1 ? (
              <div className="relative">
                <input
                  style={errors.workspaceName ? { borderColor: "#dc4a3f" } : {}}
                  value={workspaceData.workspaceName}
                  onChange={onWorkspaceNameChange}
                  className="h-[45px] w-[250px] self-center rounded-md border border-gray-300 p-4 focus:outline-none"
                ></input>
                {errors.workspaceName && (
                  <InputError error={errors.workspaceName} />
                )}
              </div>
            ) : (
              <div className="w-[350px]">
                <ReactMultiEmail
                  placeholder="Enter members emails"
                  emails={workspaceData.invitedMembers}
                  onChange={(_emails) => {
                    setWorkspaceData((prev) => ({
                      ...prev,
                      invitedMembers: _emails,
                    }));
                  }}
                  autoFocus={true}
                  getLabel={(email, index, removeEmail) => {
                    return (
                      <div data-tag key={index}>
                        <div data-tag-item>{email}</div>
                        <span
                          data-tag-handle
                          onClick={() => removeEmail(index)}
                        >
                          ×
                        </span>
                      </div>
                    );
                  }}
                />
              </div>
            )}
            {stage === 1 && (
              <span className="mt-6 text-sm text-text-color-light">
                Try the name of your company or organization.
              </span>
            )}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-8 p-7">
          <div
            className="h-1 rounded-3xl bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] transition-all duration-700"
            style={{ width: `${(stage / MAX_STAGE) * 100}%` }}
          ></div>
          <div className="flex justify-between">
            <button
              className="rounded-lg border px-8 py-3 text-text-color-light"
              onClick={handlePrevStage}
            >
              Back
            </button>
            <button
              style={loading ? { pointerEvents: "none" } : {}}
              className="rounded-lg bg-blue-500 px-8 py-3 text-white"
              onClick={handleNextStage}
            >
              {loading ? (
                <ButtonLoading />
              ) : stage === MAX_STAGE ? (
                "Finish"
              ) : (
                "Next"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkspace;
