import { Box } from 'components/Box/Box';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { FcHome, FcContacts, FcMenu } from 'react-icons/fc';

import { useAuth } from 'hooks';
import ModalMenu from 'components/ModalMenu';
import { ModalNavContent } from 'components/ModalMenu/ModalMenu.styled';
import AuthNav from 'components/AuthNav';
import { Link, MenuBtn } from './Navigation.styled';

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const { isLoggedIn } = useAuth();

  const isMobile = useMediaQuery({
    query: '(min-device-width: 480px)',
  });

  return (
    <>
      <Box
        as="ul"
        display="flex"
        alignItems="center"
        justifyContent={['space-between', null, null, null, 'flex-start']}
        gridGap={[null, null, null, null, 5]}
        fontSize={[2, 3, 4, 5, 5]}
      >
        <li>
          <Link to="/">
            <p>Go to Home</p>
            {isMobile && <FcHome />}
          </Link>
        </li>

        {!isMobile && !isLoggedIn && (
          <li>
            <MenuBtn onClick={() => setShowModal(!showModal)}>
              <FcMenu size={28} />
            </MenuBtn>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <Link to="/contacts">
              <p>Contacts</p>
              {isMobile && <FcContacts />}
            </Link>
          </li>
        )}
      </Box>

      {showModal && !isLoggedIn && !isMobile && (
        <ModalMenu onClose={() => setShowModal(!showModal)}>
          <ModalNavContent>
            <AuthNav />
          </ModalNavContent>
        </ModalMenu>
      )}
    </>
  );
};

export default Navigation;
