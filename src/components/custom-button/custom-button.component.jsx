import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, secondary, ...additionalData }) => {
  return (
    <button
      className={`custom-btn ${secondary && "secondary"}`}
      {...additionalData}
    >
      {children}
    </button>
  );
};

export default CustomButton;
