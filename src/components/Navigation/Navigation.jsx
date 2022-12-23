import { useAuth } from 'hooks';

import { FcHome, FcContacts } from 'react-icons/fc';
import { NavUl, NavItem, Link } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavUl>
      <NavItem>
        <Link to="/">
          <p>Go to Home</p>
          <FcHome />
        </Link>
      </NavItem>
      {isLoggedIn && (
        <NavItem>
          <Link to="/contacts">
            <p>Contacts</p>
            <FcContacts />
          </Link>
        </NavItem>
      )}
    </NavUl>
  );
};

export default Navigation;
