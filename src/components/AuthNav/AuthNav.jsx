import { Box } from 'components/Box/Box';
import { NavLink, ArrowIcon } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      gridGap={4}
      fontSize={[3, 3, 3, 4]}
    >
      <Box as="li" display="flex" alignItems="center" gridGap={4}>
        <ArrowIcon size={25} />
        <NavLink to="/register">Register</NavLink>
      </Box>
      <Box as="li" display="flex" alignItems="center" gridGap={4}>
        <ArrowIcon size={25} />
        <NavLink to="/login">Log In</NavLink>
      </Box>
    </Box>
  );
};

export default AuthNav;
