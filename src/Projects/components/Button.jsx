import React from "react";

function Button({ text = "", className, icon, onClick }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      <span className="btn-content">
        {icon}
        {text}
      </span>
    </button>
  );
}

export default Button;
