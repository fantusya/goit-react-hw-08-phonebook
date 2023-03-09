import styled from 'styled-components';
import { device } from 'constants/breakpoints';

export const MessageBox = styled.div`
  font-family: ${p => p.theme.fonts.body};
  letter-spacing: ${p => p.theme.letterSpacing.big};
  color: ${p => p.theme.colors.white};
`;

export const MessageText = styled.p`
  line-height: ${p => p.theme.lineHeights.text};
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;

export const EmphasizedMessage = styled.span`
  display: inline-block;
  padding: 0 ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.semiSilver};
`;
