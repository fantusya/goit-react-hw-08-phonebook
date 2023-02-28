import styled, { css } from 'styled-components';

export const MobileContactInfo = styled.li`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;

  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.tableBody};
  border-radius: 15px;

  :nth-child(3n + 3) {
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

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;

  ${props => props.deleteBtn && css`
    &:hover {
    animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }
  `}

  ${props => props.favoriteBtn && css`
    &:hover {
    	animation: rotate-center 0.6s ease-in-out both;
  }
  `}

  ${props => props.changeBtn && css`
    &:hover {
	    animation: flip-2-ver-left-2 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) backwards;
  }
  `}

  @keyframes shake-bottom {
    0%,
    100% {
      transform: rotate(0deg);
      transform-origin: 50% 100%;
    }
    10% {
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      transform: rotate(4deg);
    }
    80% {
      transform: rotate(-2deg);
    }
    90% {
      transform: rotate(2deg);
    }
  }

  @keyframes rotate-center {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

  @keyframes flip-2-ver-left-2 {
  0% {
    transform: translateX(0) rotateY(0);
    transform-origin: 0% 50%;
  }
  100% {
    transform: translateX(-100%) rotateY(-180deg);
    transform-origin: 100% 0%;
  }
  /* 100% {
    transform: translateX(0) rotateY(-360deg);
    transform-origin: 0% 50%;
  } */
}
`;

export const InputChange = styled.input`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;

  /* display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px; */

  /* font-family: ${p => p.theme.fonts.heading}; */
  font-weight: ${p => p.theme.fontWeights.normal};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.semiWhite};
  border-radius: ${p => p.theme.radii.normal};
  outline: ${p => p.theme.colors.transparent};

  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.semiWhite};
`;