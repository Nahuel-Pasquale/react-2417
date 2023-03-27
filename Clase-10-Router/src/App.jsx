import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default App;
