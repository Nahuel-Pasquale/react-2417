import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { RiNumber5 } from 'react-icons/ri';
import { TYPES } from '../../actionsTypes/countActions';
import { useCountContext } from '../../context/CountContext';
import ButtonStyled from '../button/ButtonStyled';
// import { CounterButtonStyled } from '../counter/CounterStyles';

const Add = () => {
  const { dispatch } = useCountContext();

  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT })
  const handleIncrement5 = () => dispatch({ type: TYPES.INCREMENT_5 })
  const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY })

  return (
    <>
        <ButtonStyled onClick={ handleIncrement }>
          <AiOutlinePlusCircle size='32px' color='white'/>
        </ButtonStyled>

        <ButtonStyled onClick={ handleIncrement5 }>
          <p>
            +<RiNumber5 size='32px' color='white'/>
          </p>
        </ButtonStyled>

        <ButtonStyled onClick={ handleMultiply }>
            <FaRegTimesCircle size='32px' color='white'/>
        </ButtonStyled>
    </>
  )
}

export default Add