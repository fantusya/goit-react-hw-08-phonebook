import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
// import { useDispatch } from 'react-redux';
// import { verifyEmail } from 'redux/auth/operations';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo.
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, needToVerify } = useAuth();
  return isLoggedIn && !needToVerify ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRouteRegister = ({ component: Component, redirectTo = '/' }) => {
  const { needToVerify } = useAuth();
  // const verificationToken = user.verificationToken;

  // const dispatch = useDispatch();
  // const handleVerification = () => dispatch(verifyEmail(verificationToken));
  // console.log(user);

  // return needToVerify ? <button type="button" onClick={handleVerification}>VERIFY PLEASE</button> : Component;
    return needToVerify ? <p color="white">GO TO EMAIL</p> : Component;
};
