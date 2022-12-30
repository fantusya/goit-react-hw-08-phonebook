import styled from 'styled-components';
import { Link as AuthLink } from 'react-router-dom';
import { device } from 'constants/breakpoints';

export const WelcomeText = styled.p`
  font-size: ${p => p.theme.fontSizes[3]};

  color: ${p => p.theme.colors.white};
`;

export const Link = styled(AuthLink)`
  @media ${device.miniMobile} {
    padding: ${p => p.theme.space[0]}px ${p => p.theme.space[2]}px;
  }
  @media ${device.mobile} {
    padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  }

  margin-left: ${p => p.theme.space[2]}px;

  @media ${device.miniMobile} {
    font-size: ${p => p.theme.fontSizes[2]};
  }
  @media ${device.mobile} {
    font-size: ${p => p.theme.fontSizes[3]};
  }
  font-style: italic;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.border};
  background-color: ${p => p.theme.colors.semiWhite};

  text-decoration: none;

  transition: color ${p => p.theme.transition.main},
    border ${p => p.theme.transition.main};

  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }
`;
