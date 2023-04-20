import React from "react";
import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";
import * as Yup from 'yup'

import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurnStyles";
import { Formik, useFormik } from "formik";

const phoneRegex = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/

const validationSchema = Yup.object({
  name: Yup.string().trim().required('Campo requerido'),
  surname: Yup.string().trim().required('Campo requerido'),
  date: Yup.date().required("Campo required"),
  age: Yup.number()
    .integer('Debe ser un numero entero')
    .moreThan(18, "Sos menor")
    .lessThan(60, "Descansa, ya laburaste una banda")
    .required('campo requerido'),
  email: Yup.string()
    .email('Email inválido')
    .required('Campo requerido'),
  cellphone: Yup.string()
    .matches(phoneRegex, "Número no válido")
    .required(),
  comments: Yup.string()
    .max(255, "Superaste el máximo de 255 caracteres")
    .notRequired()
})



const FormTurn = () => {

  const initialValues = {
      name: '',
      surname: '',
      date: '',
      age: '',
      hour: '',
      email: '',
      cellphone: '',
      comments: '',
    }

  // const { getFieldProps, handleSubmit, errors, touched } = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   }
  // })


  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        >
        { ({ touched, errors }) => (
        <Form>
          <Input 
            name='name'
            label="Nombre" 
            type="text" 
            isError={ touched.name && errors.name }
            // {...getFieldProps('name')}
            />
          <Input 
            name='surname'
            label="Apellido" 
            type="text" 
            isError={ touched.surname && errors.surname }
            // {...getFieldProps('surname')}
            />
          <Input 
            name='date'
            label="Fecha" 
            type="date"
            isError={ touched.date && errors.date }
            // {...getFieldProps('date')}
            />
          <Input 
            name='age'
            label="Edad" 
            type="number"
            isError={ touched.age && errors.age }
            // {...getFieldProps('age')}
            />
          <Input 
            name='hour'
            label="Hora" 
            type="time"
            // {...getFieldProps('hour')}
            />
          <Input 
            name='email'
            label="Email" 
            type="email"
            isError={ touched.email && errors.email }
            // {...getFieldProps('email')}
            />
          <Input 
            name='cellphone'
            label="Telefono" 
            type="tel"
            isError={ touched.cellphone && errors.cellphone }
            // {...getFieldProps('cellphone')}
            />
          <TextAreaInput 
            name='comments'
            label="¿Cómo escuchaste de nosotros?" 
            isError={ touched.comments && errors.comments }
            // {...getFieldProps('comments')}
            />
          {/* <Submit onSubmit={ handleSubmit } /> */}
          <Submit />
        </Form>
        )}
      </Formik>
    </FormBox>
  );
};

export default FormTurn;
