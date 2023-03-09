import styled, { css } from 'styled-components';
import { device } from 'constants/breakpoints';
import { previewImgEmersion } from 'keyframes';
import { CloseBtn } from 'components/ModalMenu/ModalMenu.styled';

export const UserBlock = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  @media ${device.desktop} {
    margin-top: ${p => p.theme.space[0]}px;
  }
  padding: ${p => p.theme.space[4]}px;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${p => p.theme.space[4]}px;

  line-height: ${p => p.theme.lineHeights.body};

  border: ${p => p.theme.borders.normalDashed} ${p => p.theme.colors.silver};
  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.userNav};
`;

export const UserWelcome = styled.p`
  display: inline-block;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[4]};
  @media ${device.miniMobile} {
    font-size: ${p => p.theme.fontSizes[1]};
  }
  letter-spacing: ${p => p.theme.letterSpacing.big};
  text-shadow: 3px 2px 2px ${p => p.theme.colors.semiWhite};

  color: ${p => p.theme.colors.border};
`;

export const LogoutBtn = styled.button`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  align-self: flex-end;

  text-align: center;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[3]};
  @media ${device.miniMobile} {
    font-size: ${p => p.theme.fontSizes[1]};
  }
  letter-spacing: ${p => p.theme.letterSpacing.big};

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};

  cursor: pointer;

  box-shadow: 3px 3px 5px 0px rgba(255, 255, 255, 0.5);

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main},
    border ${p => p.theme.transition.main};

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.transparent};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: ${p => p.theme.space[0]}px;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const AvatarBtn = styled.button`
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;
`;

export const ModalAvatarBtn = styled.button`
  ${props =>
    props.loadBtn &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${p => p.theme.space[4]}px;

      animation: ${previewImgEmersion} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        alternate forwards;
    `}

  position: relative;

  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  /* @media ${device.miniMobile} {
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  } */
  margin: ${p => p.theme.space[0]}px;

  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[2]};
  @media ${device.mobile} {
    font-size: ${p => p.theme.fontSizes[3]};
  }

  border: ${p =>
    p.loadBtn ? p.theme.borders.doubled : p.theme.borders.dashed};
  border-color: ${p => p.theme.colors.white};
  outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.white};
  background-color: ${p =>
    p.loadBtn ? p.theme.colors.secondary : p.theme.colors.btnbg};

  transition: 1s ease all;

  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    z-index: -1;

    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p =>
      p.loadBtn ? p.theme.colors.btnbg : p.theme.colors.secondary};

    transition: 1s all ease;
  }

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.transparent};
    border: ${p =>
      p.loadBtn ? p.theme.borders.dashed : p.theme.borders.doubled};

    &:before {
      left: 0;
      right: 0;
      opacity: 1;

      transition: 1s all ease;
    }
  }
`;

export const PreviewContainer = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;

  animation: ${previewImgEmersion} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    alternate forwards;

  :hover ${CloseBtn} {
    opacity: 1;
  }
`;

export const AvatarImg = styled.img`
  display: block;
  border-radius: ${p => p.theme.radii.round};
  @media ${device.miniMobile} {
    width: 30px;
  }
`;

export const PreviewImg = styled.img`
  width: 120px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.silver};
`;
