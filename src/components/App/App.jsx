import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';

import { GlobalStyle } from 'constants/GlobalStyle';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import Loader from 'components/Loader';
import SharedLayout from 'components/SharedLayout';
import RegisterForm from 'components/RegisterForm';
import LoginForm from 'components/LoginForm';

const Home = lazy(() => import('pages/Home'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Loader sizeValue="100" />
    </Box>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={
                  <AuthPage
                    titleName="registration"
                    formName="Registration form"
                    component={<RegisterForm />}
                  />
                }
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={
                  <AuthPage
                    titleName="login"
                    formName="Login form"
                    component={<LoginForm />}
                  />
                }
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
