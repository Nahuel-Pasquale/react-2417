import React from "react";
import { InputBoxStyled, InputLabelStyled } from "../Input/InputStyles";
import { TextArea, ErrorStyled } from "./TextAreaInputStyles";
import { ErrorMessage, Field } from "formik";

const TextAreaInput = ({ name, label, isError, ...field }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      {/* <TextArea 
        error={isError}
        name={name}
        id={label} 
        {...field}
        /> */}
        <Field 
          error={isError}
          name={name}
          id={label}
          as={TextArea}
        />
      {/* {isError && <ErrorStyled>{ isError }</ErrorStyled>} */}
      <ErrorMessage name={ name } component={ErrorStyled} />
    </InputBoxStyled>
  );
};

export default TextAreaInput;
