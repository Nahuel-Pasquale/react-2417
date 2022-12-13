import GeneralWrapper from './components/clase-05/GeneralWrapper';
import { CtxProvider } from './components/clase-05/MiContexto';
import Reducer from './components/clase-05/Reducer';
import SmallWrapper from './components/clase-05/SmallWrapper';
import Logo from './components/logo/Logo';
import GlobalStyle from './globalStyles/GlobalStyles';
// import Formulario from './components/clase-04/Formulario';
// import Lista from './components/clase-02/Lista';
// import Title from './components/clase-02/Title';

function App() {
  return (
    <>
      <CtxProvider>
        <GeneralWrapper>
          <SmallWrapper>
            <Reducer />
          </SmallWrapper>
        </GeneralWrapper>
      </CtxProvider>

      <Logo />
      <GlobalStyle />
    </>
  );
}

export default App;
