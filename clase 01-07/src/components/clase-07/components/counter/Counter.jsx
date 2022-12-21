import Add from '../add/Add';
import Substract from '../substract/Substract';
import Reset from '../reset/Reset';
import { CounterButtonsContainerStyled, CounterContainerStyled, CounterSpanStyled } from '../../../clase-06/components/counter/CounterStyles';
import { useSelector } from 'react-redux';



const Counter = () => {
  const state = useSelector(state => state.counter)

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