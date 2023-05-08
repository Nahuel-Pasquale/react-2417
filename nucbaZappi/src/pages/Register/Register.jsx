import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userSlice';
import { createUser } from '../../axios/axios-user';

const Register = () => {
  const dispatch = useDispatch();
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const { name, email, password } = values
          const user = await createUser(name, email, password)
          actions.resetForm()
          if(user) {
            dispatch(setCurrentUser({
              ...user
            }))
          }
        }}
      >
        <Form>
          <LoginInput 
            name='name'
            type='text' 
            placeholder='Nombre' />
          <LoginInput 
            name='email'
            type='text' 
            placeholder='Email' />
          <LoginInput 
            name='password'
            type='password' 
            placeholder='Password' />
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={e => e.preventDefault()}
          >
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
