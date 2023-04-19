import React from "react";
import {
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
  ErrorStyled,
} from "./InputStyles";

const Input = ({ label, type }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <InputStyled type={type} id={label} />

      {false && <ErrorStyled>Error</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default Input;
