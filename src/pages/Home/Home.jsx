import { Box } from 'components/Box/Box';
import { useAuth } from 'hooks';
import { GiHand } from 'react-icons/gi';

import { Container } from 'constants/GlobalStyle';
import Footer from 'components/Footer';
import { Link } from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Box as="main" flex="1 1 auto">
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
                them in your phonebook. If you don`t have any contacts, make
                some using formfields!
              </Box>
            ) : (
              <>
                <Box
                  mb={4}
                  display="flex"
                  alignItems="center"
                  justifyContent={['center', null, null, null, 'left']}
                  gridGap={3}
                >
                  <Box as="h1" color="white" fontSize={[6, 6, 7, 7]}>
                    Welcome, User!
                  </Box>
                  <GiHand size={30} color="#ffcc80" />
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
      </Box>
      <Footer />
    </>
  );
};

export default Home;
