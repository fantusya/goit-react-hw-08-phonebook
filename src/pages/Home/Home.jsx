import { Box } from 'components/Box/Box';
import { useAuth } from 'hooks';

import { MainTitle, WelcomeText, Link } from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <main>
      <Box as="section" px={6} py={4}>
        <WelcomeText>
          Now you can go to <Link to="/contacts">contacts</Link> and see them in
          your phonebook. If you don`t have any contacts, make some using
          formfields!
        </WelcomeText>
      </Box>
    </main>
  ) : (
    <main>
      <Box as="section" px={6} py={5}>
        <MainTitle>Welcome, User!</MainTitle>
        <WelcomeText>
          To use this application you need to
          <Link to="/register">register</Link> in the system! Or just
          <Link to="/login">login</Link> if you already have an account here.
        </WelcomeText>
      </Box>
    </main>
  );
};

export default Home;
