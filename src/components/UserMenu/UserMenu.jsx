import { useDispatch } from 'react-redux';
import { FcButtingIn } from 'react-icons/fc';
import { Box } from 'components/Box/Box';
import { useMediaQuery } from 'react-responsive';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserWelcome, LogoutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const isMobile = useMediaQuery({
    query: '(min-device-width: 480px)',
  });

  return (
    <Box display="inline-flex" flexDirection="column" alignItems="flex-end">
      <Box
        mb={4}
        display="flex"
        alignItems="center"
        gridGap={4}
        fontSize={[3, 4, 5, 6]}
      >
        {isMobile && <FcButtingIn size={40} />}
        <UserWelcome>Welcome, {user.email}!</UserWelcome>
      </Box>
      <LogoutBtn
        fontSize={[3, 4, 5, 5]}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </LogoutBtn>
    </Box>
  );
};

export default UserMenu;
