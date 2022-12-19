// import { useState } from 'react'
// import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
// import { RiNumber5 } from 'react-icons/ri';
// import { FiDivideCircle } from 'react-icons/fi';
// import { FaRegTimesCircle } from 'react-icons/fa';
// import { BiReset } from 'react-icons/bi';
// import { useReducer } from 'react';
// import { counterInitialState, counterReducer } from '../../reducer/counterReducer';
// import { TYPES } from '../../actionsTypes/countActions';
import { CounterButtonsContainerStyled, CounterContainerStyled, CounterSpanStyled } from './CounterStyles'
import { useCountContext } from '../../context/CountContext';
import Add from '../add/Add';
import Substract from '../substract/Substract';
import Reset from '../reset/Reset';



const Counter = () => {
  // const [count, setCount] = useState(0)

  // const handleDecrement = () => {
  //   setCount(count - 1)
  // }
  // const handleIncrement = () => {
  //   setCount(count + 1)
  // }

  // const [state, dispatch] = useReducer(counterReducer, counterInitialState);
  const { state } = useCountContext();


  return (
    <CounterContainerStyled>
      <CounterButtonsContainerStyled>
        <Substract />
        <CounterSpanStyled> { state.count } </CounterSpanStyled>
        <Add />
      </CounterButtonsContainerStyled>
      <Reset />
    </CounterContainerStyled>
  )
}

export default Counter