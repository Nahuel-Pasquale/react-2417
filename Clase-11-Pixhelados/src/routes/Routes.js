import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import { Route, Routes as ReactDomRoutes } from 'react-router-dom';
import Error404 from "../pages/error404/Error404";
import Contacto from "../pages/contacto/Contacto";
import Productos from "../pages/productos/Product";
import Section from "../pages/section/Section";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Login from "../pages/login/Login";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import User from "../pages/user/User";

function Routes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Layout>
      <ReactDomRoutes>
        <Route path='/' element={<Home />} />

        {/* PRODUCTOS */}
        <Route path='product'>
          <Route index element={<Productos />} />
          <Route path=':product' element={<Section />} />
        </Route>

        {/* CONTACTO */}
        <Route path='contacto' element={<Contacto />} />

        {/* LOGIN */}
        { !isAuth && <Route path='login' element={<Login />} /> }
        <Route 
          path="usuario/:username"
          element={
            <ProtectedRoute redirectTo='login'>
              <User />
            </ProtectedRoute>
          }
        />

        {/* NOT FOUND */}
        <Route path='*' element={<Error404 />} />
      </ReactDomRoutes>
    </Layout>
  );
}

export default Routes;
