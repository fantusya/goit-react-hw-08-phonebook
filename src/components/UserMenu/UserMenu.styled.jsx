import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const UsernameContainer = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;

  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const UserWelcome = styled.p`
  display: inline-block;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  letter-spacing: ${p => p.theme.letterSpacing.big};

  color: ${p => p.theme.colors.border};
  text-shadow: 3px 2px 2px ${p => p.theme.colors.semiWhite};
`;

export const LogoutBtn = styled.button`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;

  text-align: center;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml};
  letter-spacing: ${p => p.theme.letterSpacing.big};

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};

  cursor: pointer;

  box-shadow: 3px 3px 5px 0px rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 3px 3px 5px 0px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 3px 3px 5px 0px rgba(255, 255, 255, 0.5);

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
