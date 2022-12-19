// import GeneralWrapper from './components/clase-05/GeneralWrapper';
// import { CtxProvider } from './components/clase-05/MiContexto';
// import Reducer from './components/clase-05/Reducer';
// import SmallWrapper from './components/clase-05/SmallWrapper';
// import Formulario from './components/clase-04/Formulario';
// import Lista from './components/clase-02/Lista';
// import Title from './components/clase-02/Title';
import Counter from './components/clase-06/components/counter/Counter';
import { CountContextProvider } from './components/clase-06/context/CountContext';
import Logo from './components/logo/Logo';
import GlobalStyle from './globalStyles/GlobalStyles';

function App() {
  return (
    <>
      <CountContextProvider>
        <Counter />
      </CountContextProvider>
      <Logo />
      <GlobalStyle />
    </>
  );
}

export default App;
