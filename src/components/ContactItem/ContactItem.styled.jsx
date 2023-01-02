import styled from 'styled-components';

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

export const DeleteBtn = styled.button`
  padding: ${p => p.theme.space[0]}px;

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;

  &:hover {
    animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }

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
`;
