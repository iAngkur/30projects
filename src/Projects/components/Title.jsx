import React from "react";

function Title({ className, title }) {
  return (
    <h1 className={`title ${className || "text-center"}`}>
      {title || "Title"}
    </h1>
  );
}

export default Title;
