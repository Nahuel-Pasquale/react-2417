import React from "react";
import {
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
  ErrorStyled,
} from "./InputStyles";
import { ErrorMessage, Field } from "formik";

const Input = ({ label, type, name, isError,  ...field }) => {


  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      {/* <InputStyled 
        error={isError}
        name={name}
        type={type} 
        id={label} 
        {...field}
        /> */}
        <Field 
          error={isError}
          name={name}
          type={type} 
          id={label}
          as={InputStyled}
        />

      {/* {isError && <ErrorStyled> { isError } </ErrorStyled>} */}
      <ErrorMessage name={ name } component={ErrorStyled} />
    </InputBoxStyled>
  );
};

export default Input;
