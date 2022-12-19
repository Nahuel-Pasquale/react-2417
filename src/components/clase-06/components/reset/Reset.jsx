import React from 'react'
import { BiReset } from 'react-icons/bi'
import { TYPES } from '../../actionsTypes/countActions';
import { useCountContext } from '../../context/CountContext';

const Reset = () => {
  const { dispatch } = useCountContext();

  const handleReset = () => dispatch({ type: TYPES.RESET })
  return (
    <>
      <BiReset 
        size='38px' 
        color='#f24c4c'
        cursor='pointer'
        onClick={handleReset}
      />
    </>
  )
}

export default Reset