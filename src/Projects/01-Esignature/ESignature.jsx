import React, { useState } from "react";
import Title from "../components/Title";

function ESignature() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();

    e.target.name === "name"
      ? setName(e.target.value)
      : setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.35rem 0",
  };

  return (
    <div className="container text-center h-100 d-flex flex-column">
      <Title className="title" title={name || "Your Signature"} />
      <Title className="subtitle mb-1" title={date || "Dob"} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias ad
        cupiditate facilis repellendus impedit id! Velit vel natus incidunt,
        soluta minus rem eveniet vero minima, culpa veritatis quis commodi.
      </p>
      <footer className="d-flex justify-center  gap-2 mt-auto">
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleOnChange}
          style={inputStyle}
          className="px-1"
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
          style={inputStyle}
          className="px-1"
        />
      </footer>
    </div>
  );
}

export default ESignature;
