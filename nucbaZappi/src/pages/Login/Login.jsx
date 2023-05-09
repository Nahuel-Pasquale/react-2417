import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  LoginPasswordStyled,
} from './LoginStyles';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../axios/axios-user';
import { setCurrentUser } from '../../redux/user/userSlice';
import { useRedirect } from '../../hooks/useRedirect';

const Login = () => {
  const dispatch = useDispatch();
  useRedirect('/');

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const { email, password } = values
          const user = await loginUser(email, password)
          if(user) {
            dispatch(setCurrentUser({
              ...user.usuario,
              token: user.token
              }))
            }
          }
        }
      >
        <Form>

          <LoginInput 
            name='email'
            type='text' 
            placeholder='Email' />
          <LoginInput 
            name='password'
            type='password' 
            placeholder='Password' />

          <Link to='/forgot-password'>
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
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
          <Link to='/register'>
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit>
            Ingresar
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
