import styled from "styled-components";

export const CounterContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 766px) {
    
  }
`

export const CounterSpanStyled = styled.span`
  padding: 10px;
  width: 100px;
  font-size: 30px;
  text-align: center;
  color: white;
`
export const CounterButtonsContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  & p{
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 20px;
    color: white;
  }
`
