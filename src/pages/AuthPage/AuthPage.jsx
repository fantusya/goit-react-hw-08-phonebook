import { Box } from 'components/Box/Box';
import { Container } from 'constants/GlobalStyle';
import { AuthTitle } from './AuthPage.styled';

const AuthPage = ({ titleName, formName, component: Component }) => {
  return (
    <main>
      <title>{titleName}</title>
      <Box as="section" textAlign="center" pt={5}>
        <Container>
          <AuthTitle>{formName}</AuthTitle>
          {Component}
        </Container>
      </Box>
    </main>
  );
};

export default AuthPage;
