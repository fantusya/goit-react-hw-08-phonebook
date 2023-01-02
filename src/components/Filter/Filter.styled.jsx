import styled from 'styled-components';

export const FilterLabel = styled.p`
  color: ${p => p.theme.colors.accent};
`;

export const FilterInput = styled.input`
  padding: ${p => p.theme.space[3]}px;
  width: 230px;

  font-size: ${p => p.theme.fontSizes[2]};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;

  color: ${p => p.theme.colors.text};
`;
