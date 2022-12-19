import styled, { css } from "styled-components";

export const CounterButtonStyled = styled.button`
  padding: 10px 30px;
  background: linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2));
  border: 3px solid white;

  ${ (props) => props.left ? css`
    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
  ` : css`
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
  `}

  cursor: pointer;
`