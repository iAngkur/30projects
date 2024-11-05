import React from "react";
import Title from "../components/Title";

function RandomizeColor() {
  const handleOnClick = (selectedColorType) => {
    let selectedColor = "#eeeeee";

    switch (selectedColorType) {
      case "danger":
        selectedColor = "#ff0000";
        break;
      case "success":
        selectedColor = "#00ff00";
        break;
      case "primary":
        selectedColor = "#007bff";
        break;
      case "warning":
        selectedColor = "#ffc107";
        break;
      default:
        selectedColor = "#eeeeee";
        break;
    }

    document.body.style.backgroundColor = selectedColor;
    document.body.style.color = "#eeeeee";
  };

  return (
    <div className="container text-center">
      <Title title="Randomize Color" className="mb-1" />
      <button
        onClick={() => handleOnClick("danger")}
        className="btn btn-danger"
      >
        Click me
      </button>
      <button
        onClick={() => handleOnClick("success")}
        className="btn btn-success"
      >
        Click me
      </button>
      <button
        onClick={() => handleOnClick("primary")}
        className="btn btn-primary"
      >
        Click me
      </button>
      <button
        onClick={() => handleOnClick("warning")}
        className="btn btn-warning"
      >
        Click me
      </button>
    </div>
  );
}

export default RandomizeColor;
