import styled, { css } from 'styled-components';
import { shakeBottom, rotateCenter, rotateY, heartbeat } from 'keyframes';
import { device } from 'constants/breakpoints';

export const MobileContactInfo = styled.li`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;

  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.tableBody};
  border-radius: 15px;

  :nth-child(n + 3) {
    padding: ${p => p.theme.space[0]}px;

    background-color: ${p => p.theme.colors.transparent};
  }
`;

export const MobileContactText = styled.p`
  font-size: ${p => p.theme.fontSizes[2]};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};

  color: ${p => p.theme.colors.accent};
`;

export const TableBtn = styled.button`
  padding: ${p => p.theme.space[0]}px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;

  ${props =>
    props.deleteBtn &&
    css`
      &:hover {
        animation: ${shakeBottom} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
          both;
      }
    `}

  ${props =>
    props.favoriteBtn &&
    css`
      &:hover {
        animation: ${rotateCenter} 0.6s ease-in-out both;
      }
    `}

  ${props =>
    props.changeBtn &&
    css`
      &:hover {
        animation: ${rotateY} 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      }
    `}

    ${props =>
    props.confirmBtn &&
    css`
      &:hover {
        animation: ${heartbeat} 1.5s ease-in-out infinite both;
      }
    `}

    ${props =>
    props.cancelBtn &&
    css`
      &:hover {
        animation: ${shakeBottom} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
          both;
      }
    `}
`;

export const InputChange = styled.input`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  width: 100%;

  font-weight: ${p => p.theme.fontWeights.normal};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.semiWhite};
  border-radius: ${p => p.theme.radii.normal};
  outline: ${p => p.theme.colors.transparent};

  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.semiWhite};

  @media ${device.miniMobile} {
    max-width: 200px;
  }
  @media ${device.mobile} {
    max-width: 130px;
  }
  @media ${device.mobile} {
    max-width: 200px;
  }
`;
