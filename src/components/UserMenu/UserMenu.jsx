import { useDispatch } from 'react-redux';
import { FcButtingIn } from 'react-icons/fc';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  UserMenuContainer,
  UsernameContainer,
  UserWelcome,
  LogoutBtn,
} from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UsernameContainer>
        <FcButtingIn size={40} />
        <UserWelcome>Welcome, {user.email}!</UserWelcome>
      </UsernameContainer>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogoutBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
