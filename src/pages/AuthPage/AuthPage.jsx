import { Box } from 'components/Box/Box';

import { AuthTitle } from './AuthPage.styled';

const AuthPage = ({ titleName, formName, component: Component }) => {
  return (
    <main>
      <title>{titleName}</title>
      <Box as="section" textAlign="center">
        <AuthTitle>{formName}</AuthTitle>
        {Component}
      </Box>
    </main>
  );
};

export default AuthPage;
