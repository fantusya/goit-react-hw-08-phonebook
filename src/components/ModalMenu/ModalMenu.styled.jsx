import styled, { css } from 'styled-components';
import { device } from 'constants/breakpoints';
import { modalMenuEmersion, avatarModalEmersion } from 'keyframes';

export const ModalBackdrop = styled.div`
  padding: 0 ${p => p.theme.space[4]}px;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.colors.semiBlack};
`;

export const ModalNavContent = styled.div`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.silver};

  background-color: ${p => p.theme.colors.modalBg};

  animation: ${modalMenuEmersion} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const ModalAvatarContent = styled.div`
  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[5]}px;
  max-width: 600px;
  width: 100%;
  position: relative;

  display: inline-flex;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: ${p => p.theme.space[6]}px;

  background-color: ${p => p.theme.colors.modalBg};
  border: ${p => p.theme.borders.doubled} ${p => p.theme.colors.silver};
  border-radius: ${p => p.theme.radii.normal};

  animation: ${avatarModalEmersion} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;

export const CloseBtn = styled.button`
  ${props =>
    props.closeModal &&
    css`
      border-top-right-radius: ${p => p.theme.radii.normal};
      border-bottom-left-radius: 5px;
    `};

  ${props =>
    props.closePreview &&
    css`
      width: 20px;
      height: 20px;
      @media ${device.miniMobile} {
        right: 22%;
      }
    `};

  opacity: ${p => (p.closeModal ? 1 : 0)};
  position: absolute;
  top: 0;
  right: 0;

  margin: ${p => p.theme.space[0]}px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${p =>
    p.closeModal ? p.theme.fontSizes[5] : p.theme.fontSizes[3]};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  background-color: ${p => p.theme.colors.semiWhite};

  cursor: pointer;

  transition: opacity ${p => p.theme.transition.main},
    color ${p => p.theme.transition.main};

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
  }
`;
