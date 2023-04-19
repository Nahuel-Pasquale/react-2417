import React from "react";
import { InputBoxStyled, InputLabelStyled } from "../Input/InputStyles";
import { TextArea, ErrorStyled } from "./TextAreaInputStyles";

const TextAreaInput = ({ label }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <TextArea id={label} />
      {false && <ErrorStyled>Error</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default TextAreaInput;
