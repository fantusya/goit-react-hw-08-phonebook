import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalContent = styled.div`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.silver};

  background-color: ${p => p.theme.colors.modalBg};

  animation: modal-emersion 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes modal-emersion {
    0% {
      transform: translateY(-100%);
      opacity: 1;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
