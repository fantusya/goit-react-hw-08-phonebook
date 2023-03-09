import styled from 'styled-components';
import { device } from 'constants/breakpoints';

export const AuthTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[5]};
  @media ${device.mobile} {
    font-size: ${p => p.theme.fontSizes[6]};
  }
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes[7]};
  }
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: ${p => p.theme.letterSpacing.big};

  color: ${p => p.theme.colors.accent};
`;
