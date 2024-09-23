import React from "react";
import { getFirstLetters } from "../utils/utils";

const Avatar = ({
  name = "Default",
  backgroundColor = "#7F77F1",
  textColor = "#FFFFFF",
  round = "100%",
  size = "20px",
  fontSize = "14px",
  fontWeight = "600",
  numberOfLetters = 1,
  image,
  onClick,
}) => {
  return (
    <div
      style={{
        backgroundColor: image ? "transparent" : backgroundColor,
        color: textColor,
        width: size,
        height: size,
        borderRadius: round,
        fontWeight,
        fontSize,
      }}
      className="flex shrink-0 items-center justify-center"
      onClick={onClick}
    >
      {image ? <img src={image}></img> : getFirstLetters(name, numberOfLetters)}
    </div>
  );
};

export default Avatar;
