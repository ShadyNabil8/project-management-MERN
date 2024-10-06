import React from "react";
import OptionsContainer from "./OptionsContainer";

const NewListPanel = ({ setIsPanelVisible }) => {
  return (
    <OptionsContainer
      customStyle="fixed above-center flex flex-col w-full sm:w-[580px] p-5 "
      setIsPanelVisible={setIsPanelVisible}
      darkBackground={true}
    >
      <p>Hi welcome</p>
    </OptionsContainer>
  );
};

export default NewListPanel;
