import React from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { FiDivideCircle } from 'react-icons/fi'
import { RiNumber5 } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { decrement, decrement_5, divide } from '../../actions/counterActions'
import ButtonStyled from '../button/ButtonStyled'

const Substract = () => {
  const dispatch = useDispatch();

  return (
    <>
        <ButtonStyled left 
          onClick={ () => dispatch(divide()) }
        >
            <FiDivideCircle size='32px' color='white'/>
        </ButtonStyled>

        <ButtonStyled left 
          onClick={ () => dispatch(decrement_5()) }
          >
          <p>
            -<RiNumber5 size='32px' color='white'/>
          </p>
        </ButtonStyled>

        <ButtonStyled left 
          onClick={ () => dispatch(decrement()) }
        >
          <AiOutlineMinusCircle size='32px' color='white' /> 
        </ButtonStyled>
    </>
  )
}

export default Substract