import React from "react";
import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";

import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurnStyles";

const FormTurn = () => {
  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>
      <Form>
        <Input label="Nombre" type="text"></Input>
        <Input label="Apellido" type="text"></Input>
        <Input label="Fecha" type="date"></Input>
        <Input label="Edad" type="number"></Input>
        <Input label="Hora" type="time"></Input>
        <Input label="Correo Electronico" type="email"></Input>
        <Input label="Telefono" type="tel"></Input>
        <TextAreaInput label="¿Cómo escuchaste de nosotros?" />
        <Submit />
      </Form>
    </FormBox>
  );
};

export default FormTurn;
