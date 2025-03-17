import React from "react";

function Title({ className, title = "Title" }) {
  return <h1 className={`title ${className || "text-center"}`}>{title}</h1>;
}

export default Title;
