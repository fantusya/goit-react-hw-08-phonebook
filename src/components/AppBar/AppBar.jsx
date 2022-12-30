import { Box } from 'components/Box/Box';
import { useMediaQuery } from 'react-responsive';

import { Container } from 'constants/GlobalStyle';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const isMobile = useMediaQuery({
    query: '(min-device-width: 480px)',
  });

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1200px)',
  });

  return (
    <Box
      as="header"
      pt={[4, 4, 4, 5, 5]}
      pb={[4, 4, 4, 5, 5]}
      borderBottom="1px solid"
      borderBottomColor="semiSilver"
    >
      <Container>
        <Box as="nav" textAlign="center">
          <Box
            display={[null, null, null, null, 'flex']}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Navigation />

            {isLoggedIn && !isDesktop && (
              <Box
                mt={5}
                p={4}
                display="inline-block"
                border="1px dashed silver"
                borderRadius="normal"
                backgroundColor="userNav"
                textAlign="start"
                lineHeight="body"
              >
                <UserMenu />
              </Box>
            )}

            {isLoggedIn && isDesktop && (
              <Box display="inline-block" textAlign="start">
                <UserMenu />
              </Box>
            )}
          </Box>

          {!isLoggedIn && isMobile && (
            <Box mt={5} pl={5}>
              <AuthNav />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default AppBar;
