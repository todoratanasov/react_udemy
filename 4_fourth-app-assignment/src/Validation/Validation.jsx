import React from "react";

const validation = (props) => {
  const inputLength = props.inputLength;
  return inputLength <= 5 ? "Text too short" : "Text is long enaught";
};

export default validation;
