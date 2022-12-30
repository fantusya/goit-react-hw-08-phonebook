import styled from 'styled-components';
import { Link as HomeLink } from 'react-router-dom';

export const NavItem = styled.li``;

export const Link = styled(HomeLink)`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;

  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.semiWhite};
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.semiWhite};

  word-spacing: 0.1em;
  text-decoration: none;

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main},
    border-color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.transparent};
  }
`;

export const MenuBtn = styled.button`
  padding: ${p => p.theme.space[0]}px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.transparent};
`;
