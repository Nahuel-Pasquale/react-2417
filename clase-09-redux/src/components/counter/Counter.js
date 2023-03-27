import {
  CounterContainerStyled,
  CounterSpanStyled,
  CounterButtonContainerStyled,
} from "./CounterStyles";
import Reset from "../reset/Reset";

import Substract from "../substract/Substract";
import Add from "../add/Add";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Counter = () => {

  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <CounterContainerStyled>
      <CounterButtonContainerStyled>
        <Substract />
        <CounterSpanStyled> { state.contador.count } </CounterSpanStyled>
        <Add />
      </CounterButtonContainerStyled>

      <Reset />
    </CounterContainerStyled>
  );
};

export default Counter;
