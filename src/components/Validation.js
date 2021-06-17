import React from "react";

const validation = (props) => {
  let validationMessage = "Text is Long";
  if (props.inputLength <= 5) {
    validationMessage = "Text is Short";
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};
export default validation;
