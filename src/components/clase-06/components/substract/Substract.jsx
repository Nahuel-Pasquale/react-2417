import React from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { FiDivideCircle } from 'react-icons/fi'
import { RiNumber5 } from 'react-icons/ri'
import { TYPES } from '../../actionsTypes/countActions'
import { useCountContext } from '../../context/CountContext'
import ButtonStyled from '../button/ButtonStyled'
// import { CounterButtonStyled } from '../counter/CounterStyles'

const Substract = () => {
  const { dispatch } = useCountContext();

  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT })
  const handleDecrement5 = () => dispatch({ type: TYPES.DECREMENT_5 })
  const handleDivide = () => dispatch({ type: TYPES.DIVIDE })

  return (
    <>
        <ButtonStyled left onClick={ handleDivide }>
            <FiDivideCircle size='32px' color='white'/>
        </ButtonStyled>

        <ButtonStyled left onClick={ handleDecrement5 }>
          <p>
            -<RiNumber5 size='32px' color='white'/>
          </p>
        </ButtonStyled>

        <ButtonStyled left onClick={ handleDecrement }>
          <AiOutlineMinusCircle size='32px' color='white' /> 
        </ButtonStyled>
    </>
  )
}

export default Substract