import styled from 'styled-components';
import { device } from 'constants/breakpoints';

export const FooterMessage = styled.b`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;

  display: inline-block;
  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes[7]};
  @media ${device.miniMobile} {
    font-size: ${p => p.theme.fontSizes[1]};
  }
  @media ${device.mobile} {
    font-size: ${p => p.theme.fontSizes[2]};
  }
  letter-spacing: ${p => p.theme.letterSpacing.big};

  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.border};
  background-color: ${p => p.theme.colors.semiWhite};
`;

export const SocialsLink = styled.a`
  color: ${p => p.theme.colors.semiWhite};
  transition: color ${p => p.theme.transition.main};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
