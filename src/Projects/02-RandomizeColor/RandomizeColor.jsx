import React from "react";
import Title from "../components/Title";

const COLOR_TYPE = {
  DANGER: "DANGER",
  SUCCESS: "SUCCESS",
  PRIMARY: "PRIMARY",
  WARNING: "WARNING",
};

function RandomizeColor() {
  const handleOnClick = (selectedColorType) => {
    let selectedColor = "#eeeeee";

    switch (selectedColorType) {
      case COLOR_TYPE.DANGER:
        selectedColor = "#ff0000";
        break;
      case COLOR_TYPE.SUCCESS:
        selectedColor = "#00ff00";
        break;
      case COLOR_TYPE.PRIMARY:
        selectedColor = "#007bff";
        break;
      case COLOR_TYPE.WARNING:
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
        onClick={() => handleOnClick(COLOR_TYPE.DANGER)}
        className="btn btn-danger"
      >
        Click me
      </button>
      <button
        onClick={() => handleOnClick(COLOR_TYPE.SUCCESS)}
        className="btn btn-success"
      >
        Click me
      </button>
      <button
        onClick={() => handleOnClick(COLOR_TYPE.PRIMARY)}
        className="btn btn-primary"
      >
        Click me
      </button>
      <button
        onClick={() => handleOnClick(COLOR_TYPE.WARNING)}
        className="btn btn-warning"
      >
        Click me
      </button>
    </div>
  );
}

export default RandomizeColor;
