import { Box } from 'components/Box/Box';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="header" p={5}>
      <nav>
        <Box display="flex" justifyContent="space-between">
          <Navigation />
          {isLoggedIn && <UserMenu />}
        </Box>
        <AuthNav />
      </nav>
    </Box>
  );
};

export default AppBar;
