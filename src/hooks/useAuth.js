import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsVerified,
  selectNeedToVerify,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isVerified = useSelector(selectIsVerified);
  const needToVerify = useSelector(selectNeedToVerify);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isVerified,
    needToVerify,
  };
};
