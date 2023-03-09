import { Box } from 'components/Box/Box';
import { Container } from 'constants/GlobalStyle';
import Footer from 'components/Footer';
import { AuthTitle } from './AuthPage.styled';

const AuthPage = ({ titleName, formName, component: Component }) => {
  return (
    <>
      <Box as="main" flex="1 1 auto">
        <title>{titleName}</title>
        <Box as="section" textAlign="center" py={6}>
          <Container>
            <AuthTitle>{formName}</AuthTitle>
            {Component}
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AuthPage;
