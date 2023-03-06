import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectNeedToVerify,
  selectError,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const needToVerify = useSelector(selectNeedToVerify);
  const error = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    needToVerify,
    error,
  };
};
