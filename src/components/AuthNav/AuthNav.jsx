import { AuthNavUl, NavLink, NavItem, ArrowIcon } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavUl>
      <NavItem>
        <ArrowIcon size={25} />
        <NavLink to="/register">Register</NavLink>
      </NavItem>
      <NavItem>
        <ArrowIcon size={25} />
        <NavLink to="/login">Log In</NavLink>
      </NavItem>
    </AuthNavUl>
  );
};

export default AuthNav;
