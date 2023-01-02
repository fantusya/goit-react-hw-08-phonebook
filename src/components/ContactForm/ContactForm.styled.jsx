import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { device } from 'constants/breakpoints';

export const Form = styled(FormikForm)`
  @media ${device.miniMobile} {
    padding: ${p => p.theme.space[5] + 8}px ${p => p.theme.space[4]}px;
    gap: ${p => p.theme.space[6] - 9}px;
  }
  @media ${device.mobile} {
    padding: ${p => p.theme.space[6]}px ${p => p.theme.space[5]}px;
    gap: ${p => p.theme.space[6]}px;
  }
  @media ${device.desktop} {
    width: 360px;
  }

  max-width: 410px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};

  color: ${p => p.theme.colors.accent};
  background-image: radial-gradient(
    circle 674px at 18.3% 77%,
    rgba(139, 186, 244, 1) 3.4%,
    rgba(15, 51, 92, 1) 56.6%
  );
`;
