import { Box } from 'components/Box/Box';
// import { toast } from 'react-toastify';

// import { useAuth } from 'hooks';
import { Container } from 'constants/GlobalStyle';
import { AuthTitle } from './AuthPage.styled';

const AuthPage = ({ titleName, formName, component: Component }) => {
  // const { error } = useAuth();

  // if (error) {
  //   console.log('HI FROM error', error);
  //   toast.error('error', { pauseOnHover: false });
  // }
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
