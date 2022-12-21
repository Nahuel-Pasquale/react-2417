import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { RiNumber5 } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { increment, increment_5, multiply } from '../../actions/counterActions';
import ButtonStyled from '../button/ButtonStyled';

const Add = () => {
  const dispatch = useDispatch();

  return (
    <>
        <ButtonStyled 
          onClick={ () => dispatch(increment()) }
        >
          <AiOutlinePlusCircle size='32px' color='white'/>
        </ButtonStyled>

        <ButtonStyled
          onClick={ () => dispatch(increment_5()) }
        >
          <p>
            +<RiNumber5 size='32px' color='white'/>
          </p>
        </ButtonStyled>

        <ButtonStyled 
          onClick={ () => dispatch(multiply()) }
        >
            <FaRegTimesCircle size='32px' color='white'/>
        </ButtonStyled>
    </>
  )
}

export default Add