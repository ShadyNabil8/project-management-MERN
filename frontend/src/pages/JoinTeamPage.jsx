import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import useNotifier from "../hooks/useNotifier";
import Avatar from "react-avatar";
import ButtonLoading from "../components/ButtonLoading";
import api from "../api/api";

const JoinTeamPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const notify = useNotifier();

  if (!user.workspaceInvitations.length) {
    return <Navigate to="/" />;
  }

  const handleJoin = async (isInvitationAccepted) => {
    setLoading(true);
    try {
      const response = await api.post("/workspace-invitation/handle", {
        isInvitationAccepted,
        workspaceInvitation: user.workspaceInvitations[0],
      });

      // Remove the current invitation.
      setUser((prev) => ({
        ...prev,
        workspaceInvitations: prev.workspaceInvitations.filter(
          (invitation) => invitation._id != prev.workspaceInvitations[0]._id,
        ),
        workspaces: isInvitationAccepted
          ? [...prev.workspaces, response.data.workspaceDocument]
          : prev.workspaces,
      }));

      navigate("/");
    } catch (error) {
      notify.error(error.response?.data?.message || "Something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#FAFBFC]">
      <div className="bg-whire absolute left-1/2 top-1/2 flex min-h-[460px] w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center px-4 py-10">
        <Avatar
          name={user.workspaceInvitations[0].workspace.name}
          color="#B2E0E0"
          fgColor="#3D5456"
          round="10px"
          size="120px"
          maxInitials={1}
          textSizeRatio={1.7}
        />
        <p className="mt-14 text-center text-3xl text-text-color-light">{`Join ${user.workspaceInvitations[0].workspace.name} workspace on shady's project management app`}</p>
        <button
          style={loading ? { pointerEvents: "none" } : {}}
          className="mt-14 flex h-[85px] w-full items-center justify-center rounded-md bg-[#5F55EE] p-3 text-xl font-semibold text-white hover:bg-[#544DC9] md:w-[666px]"
          onClick={() => handleJoin(true)}
        >
          {loading ? (
            <ButtonLoading />
          ) : (
            `Yes, join ${user.workspaceInvitations[0].workspace.name}`
          )}
        </button>
      </div>
      <button
        style={loading ? { pointerEvents: "none" } : {}}
        className="text-md absolute right-5 top-10 flex w-fit items-center justify-center rounded-md p-3 text-blue-400 hover:underline md:right-20"
        onClick={() => handleJoin(false)}
      >
        No Thanks
      </button>
    </div>
  );
};

export default JoinTeamPage;
