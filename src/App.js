// import GeneralWrapper from './components/clase-05/GeneralWrapper';
// import { CtxProvider } from './components/clase-05/MiContexto';
// import Reducer from './components/clase-05/Reducer';
// import SmallWrapper from './components/clase-05/SmallWrapper';
// import Formulario from './components/clase-04/Formulario';
// import Lista from './components/clase-02/Lista';
// import Title from './components/clase-02/Title';
// import { CountContextProvider } from './components/clase-06/context/CountContext';
// import Counter from './components/clase-06/components/counter/Counter';
import { Provider } from 'react-redux';
import GeneralWrapper from './components/clase-05/GeneralWrapper';
import SmallWrapper from './components/clase-05/SmallWrapper';
import Counter from './components/clase-07/components/counter/Counter';
import store from './components/clase-07/store';
import Logo from './components/logo/Logo';
import GlobalStyle from './globalStyles/GlobalStyles';

function App() {
  return (
    <>
      <Provider store={store}>
        <GeneralWrapper>
          <SmallWrapper>
            <Counter />
          </SmallWrapper>
        </GeneralWrapper>
      </Provider>
      <Logo />
      <GlobalStyle />
    </>
  );
}

export default App;
