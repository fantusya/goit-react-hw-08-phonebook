import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FcRightUp2 } from 'react-icons/fc';

export const NavLink = styled(Link)`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;

  font-family: ${p => p.theme.fonts.heading};
  letter-spacing: ${p => p.theme.letterSpacing.big};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.border};
  background-color: ${p => p.theme.colors.semiWhite};

  transition: color ${p => p.theme.transition.main},
    border ${p => p.theme.transition.main};

  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.white};
    text-decoration: underline;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }
`;

export const ArrowIcon = styled(FcRightUp2)`
  transform: rotate(90deg);
`;
