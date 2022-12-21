import React from 'react'
import { BiReset } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { reset } from '../../actions/counterActions'

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <>
      <BiReset 
        size='38px' 
        color='#f24c4c'
        cursor='pointer'
        onClick={() => dispatch(reset())}
      />
    </>
  )
}

export default Reset