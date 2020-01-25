import React from "react";
import "./custom-link.styles.scss";
import { Link } from "react-router-dom";

const CustomLink = ({ children, to, light, ...additionalData }) => {
  return (
    <Link className={`btn ${light ? "light" : ""}`} to={to} {...additionalData}>
      {children}
    </Link>
  );
};

export default CustomLink;
