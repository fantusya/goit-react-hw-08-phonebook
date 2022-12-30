import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as Error,
} from 'formik';
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

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  max-width: 410px;
  width: 100%;

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};

  color: ${p => p.theme.colors.accent};
  background-image: radial-gradient(
    circle 674px at 18.3% 77%,
    rgba(139, 186, 244, 1) 3.4%,
    rgba(15, 51, 92, 1) 56.6%
  );
`;

export const FormLabelContainer = styled.label`
  @media ${device.miniMobile} {
    padding-top: ${p => p.theme.space[3]}px;
  }
  @media ${device.mobile} {
    padding-top: ${p => p.theme.space[4]}px;
  }

  position: relative;

  width: 100%;
`;

export const Field = styled(FormikField)`
  padding: ${p => p.theme.space[2] + 2}px;

  width: 100%;

  font-size: ${p => p.theme.fontSizes[2]};
  line-height: ${p => p.theme.lineHeights.body};

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.text};

  &::placeholder {
    opacity: 0;
    transition: opacity ${p => p.theme.transition.main};
  }

  &:focus::placeholder {
    opacity: 1;
    font-size: ${p => p.theme.fontSizes[2]};
    color: ${p => p.theme.colors.silver};
  }
`;

export const FormLabel = styled.span`
  @media ${device.miniMobile} {
    font-size: ${p => p.theme.fontSizes[1]};

    transform: translate(10px, 20px);
  }
  @media ${device.mobile} {
    font-size: ${p => p.theme.fontSizes[2]};

    transform: translate(10px, 26px);
  }

  position: absolute;
  top: 0;
  left: 0;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.text};

  transition: transform ${p => p.theme.transition.main};

  ${Field}:focus+&,
  ${Field}:not(:placeholder-shown)+& {
    @media ${device.miniMobile} {
      padding: ${p => p.theme.space[2] + 1}px;
    }
    @media ${device.mobile} {
      padding: ${p => p.theme.space[2] + 2}px;
    }

    display: block;
    transform: translate(0px, -25px);

    border-radius: ${p => p.theme.radii.normal};
    outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};

    color: ${p => p.theme.colors.white};
    background: #7f7fd5;
    background: linear-gradient(to bottom, #91eae4, #86a8e7, #7f7fd5);
  }
`;

export const FormBtn = styled.button`
  @media ${device.miniMobile} {
    padding: ${p => p.theme.space[4] - 4}px;

    font-size: ${p => p.theme.fontSizes[1]};
  }

  @media ${device.mobile} {
    padding: ${p => p.theme.space[4]}px;
  }

  display: block;
  min-width: 180px;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[4]}px;
  text-align: center;

  text-transform: uppercase;

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 0 20px ${p => p.theme.colors.accent};

  color: ${p => p.theme.colors.white};
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  background-size: 200% auto;

  cursor: pointer;

  transition: ${p => p.theme.transition.main};

  &:hover {
    background-position: right center;
    color: ${p => p.theme.colors.white};
    text-decoration: none;
  }
`;

export const ErrorMessageCustom = styled(Error)`
  @media ${device.miniMobile} {
    bottom: -21px;

    font-size: ${p => p.theme.fontSizes[1]};
  }
  @media ${device.mobile} {
    bottom: -25px;

    font-size: ${p => p.theme.fontSizes[2]};
  }

  display: block;

  position: absolute;
  left: 10px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${p => p.theme.fonts.monospace};

  color: ${p => p.theme.colors.red};
`;
