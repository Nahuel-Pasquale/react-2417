import React, { useContext } from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Product from '../pages/Product/Product'
import Products from '../pages/Products/Products'
import AuthContext, { AuthProvider } from '../context/AuthContext'
import ProtectedRoute from '../components/protectedRoute/ProtectedRoute'
import User from '../pages/User/User'

const Routes = () => {
  const isAuth = useContext(AuthContext);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ReactDomRoutes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/about' element={<About />} /> */}

            <Route path='products'>
              <Route index element={<Products />} />
              <Route path=':product' element={<Product />} />
            </Route>

            {
              !isAuth && <Route path='login' element={<Login />} />
            }

            <Route path='usuario/:username' 
              element={
                <ProtectedRoute redirectTo={'/login'}>
                  <User />
                </ProtectedRoute>
              }
            />

            <Route path='*' element={ <Navigate to={'/'} /> } />
          </ReactDomRoutes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routes