import styled from 'styled-components';

export const AuthTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.lx};
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: ${p => p.theme.letterSpacing.big};

  color: ${p => p.theme.colors.accent};
`;
