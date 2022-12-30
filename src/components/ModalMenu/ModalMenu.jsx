import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContent } from './ModalMenu.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalMenu = ({ onClose, children }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    // console.log('e.currentTarget', e.currentTarget);
    // console.log('e.target', e.target);
    if (e.currentTarget === e.target || e.target.nodeName === 'A') onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

export default ModalMenu;

ModalMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};