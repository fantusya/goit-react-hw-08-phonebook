import styled from 'styled-components';

export const MessageBox = styled.div`
  font-family: ${p => p.theme.fonts.body};
  letter-spacing: ${p => p.theme.letterSpacing.big};
  color: ${p => p.theme.colors.white};
`;

export const EmphasizedMessage = styled.span`
  display: inline-block;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.semiSilver};
`;
