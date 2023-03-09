import styled from 'styled-components';
import { device } from 'constants/breakpoints';

export const PageTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;

  @media ${device.miniMobile} {
    font-size: ${p => p.theme.fontSizes[7]};
  }
  @media ${device.mobile} {
    font-size: ${p => p.theme.fontSizes[9]};
  }
  @media ${device.desktop} {
    margin-bottom: ${p => p.theme.space[0]}px;

    padding-left: ${p => p.theme.space[6]}px;
  }

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: ${p => p.theme.letterSpacing.small};

  color: ${p => p.theme.colors.accent};
`;

export const ContactsTitle = styled.h2`
  @media ${device.miniMobile} {
    font-size: ${p => p.theme.fontSizes[6]};
  }
  @media ${device.mobile} {
    font-size: ${p => p.theme.fontSizes[7]};
  }

  margin-bottom: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.heading};
  /* font-size: ${p => p.theme.fontSizes[7]}; */
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.accent};
`;
