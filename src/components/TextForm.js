import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleButton = () => {
    // console.log("clicked Submit button");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleTextArea = (event) => {
    // console.log("text has changed");
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Cleard the Text", "success");
  };
  const [text, setText] = useState("Enter text here :");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleTextArea}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#2e4871" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary my-2 mx-2"
            onClick={handleButton}
          >
            UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary my-2"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary :</h1>
        <p>
          {text.split(" ").filter((word) => word !== "").length} Words and{" "}
          {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Sometext in above Box to Preview it here "}
        </p>
      </div>
    </>
  );
}
TextForm.propTypes = { heading: PropTypes.string };
