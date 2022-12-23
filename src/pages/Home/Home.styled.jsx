import styled from 'styled-components';
import { Link as AuthLink } from 'react-router-dom';

export const MainTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.white};
`;

export const WelcomeText = styled.div`
  font-size: ${p => p.theme.fontSizes.ml};

  color: ${p => p.theme.colors.white};
`;

export const Link = styled(AuthLink)`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontSizes.ml};
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
