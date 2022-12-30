import { Box } from 'components/Box/Box';
import { useAuth } from 'hooks';

import { Container } from 'constants/GlobalStyle';
import { Link } from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <main>
      <Box as="section" pt={5}>
        <Container>
          {isLoggedIn ? (
            <Box
              as="p"
              color="white"
              textAlign="justify"
              lineHeight="text"
              fontSize={[2, 2, 3, 3]}
            >
              Now you can go to <Link to="/contacts">contacts</Link> and see
              them in your phonebook. If you don`t have any contacts, make some
              using formfields!
            </Box>
          ) : (
            <>
              <Box
                as="h1"
                mb={4}
                color="white"
                textAlign={['center', null, null, null, 'left']}
                fontSize={[6, 6, 7, 7]}
              >
                Welcome, User!
              </Box>
              <Box
                as="p"
                color="white"
                textAlign="justify"
                lineHeight="text"
                fontSize={[2, 2, 3, 3]}
              >
                To use this application you need to
                <Link to="/register">register</Link> in the system! Or just
                <Link to="/login">login</Link> if you already have an account
                here.
              </Box>
            </>
          )}
        </Container>
      </Box>
    </main>
  );
};

export default Home;
