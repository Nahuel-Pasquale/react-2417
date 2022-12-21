import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react'
import styled from 'styled-components'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const StyledFormControl = styled.form`
  display: flex;
  margin: 0 auto;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 80vh;
`
const StyledInput = styled(Input)`
  padding: 15px 35px 15px 15px;
  border-radius: 8px;
  background-color: #252525;
  color: #fff;
  outline: none;
  border: none;
  width: 350px;
`

const FormField = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
`

const StyledButton = styled(Button)`
  font-size: 0.9rem;
  background: linear-gradient(90deg, #ffa100, #ff005c);
  color: black;
  font-weight: 700;
  transition: all .3s ease;
  padding: 15px 30px;
  border-radius: 1rem;
  cursor: pointer;
`

const Formulario = () => {

  const initialState = {
    username: '',
    email: '',
  }
  const [error, setError] = useState(false);
  const [form, setForm] = useState(initialState);

  const inputRef = useRef();
  const formRef = useRef();

  const { username, email } = form;

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value
    });
  }

  // const onBlur = () => {
  //   setForm(initialState);
  // }

  const onClick = () => {
    setForm(initialState);
  }

  useEffect(() => {
    console.log(email);
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!re.test(email) && email !== ''){
      inputRef.current.style.border = '3px solid red'
      setError(true);
    } else {
      inputRef.current.style.border = '1px solid green'
      setError(false);
    }
  }, [email])

  return (
    <>
      <StyledFormControl ref={ formRef }>
        <Heading as='h2' size='2x1'> Form Clase 4 </Heading>
        <FormField>
          <FormLabel>Name</FormLabel>
          <StyledInput 
            type='text'
            name='username'
            value={username}
            onChange={ handleInputChange }
            />
        </FormField>
        <FormField  isInvalid={error}>
          <FormLabel>Email address</FormLabel>
          <StyledInput 
            ref={ inputRef }
            type='email'
            name='email'
            value={email}
            onChange={ handleInputChange }
            // onBlur={ onBlur }
            />
          {!error && <FormHelperText>We'll never share your email.</FormHelperText>}
          <FormErrorMessage color='red'> * El email es obligarorio </FormErrorMessage>
        </FormField>
        <StyledButton onClick={ onClick }> Enviar </StyledButton>
      </StyledFormControl>
    </>
  )
}

export default Formulario