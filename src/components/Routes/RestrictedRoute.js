import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo.
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, needToVerify } = useAuth();
  return isLoggedIn && !needToVerify ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRouteRegister = ({
  successRegister: MessageComponent,
  failedOrNotRegistered: Form,
}) => {
  const { needToVerify } = useAuth();

  // if (typeof error === 'string') {
  //   console.log('HI FROM error', error);
  //   toast.error('error', { pauseOnHover: false });
  // }
  return needToVerify ? MessageComponent : Form;
};
