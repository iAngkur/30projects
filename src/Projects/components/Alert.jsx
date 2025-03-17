import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { TiDelete } from "react-icons/ti";

function Alert({ type = "", message, delay, delayTime = 3000 }) {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("fadeAlert");

    setTimeout(() => setShowAlert(false), 400);
  };

  useEffect(() => {
    delay && setTimeout(() => setShowAlert(false), delayTime);
  });

  return (
    showAlert && (
      <div className={`alert ${type !== "" ? `alert-${type}` : ""}`}>
        <span>{message}</span>
        <Button onClick={closeAlert} text="X" className="p-0 m-0" />
      </div>
    )
  );
}

export default Alert;
