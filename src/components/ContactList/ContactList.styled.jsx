import styled from 'styled-components';
import { device } from 'constants/breakpoints';

export const ContactListTable = styled.table`
  text-align: center;

  border-collapse: separate;
  border-spacing: ${p => p.theme.space[1]}px;
`;

export const ContactListThead = styled.thead`
  background-color: ${p => p.theme.colors.tableHead};

  th {
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
    width: 300px;
  }
`;

export const ContactListTbody = styled.tbody`
  td {
    padding: ${p => p.theme.space[3]}px;
    @media ${device.tablet} {
      padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
    }

    font-size: ${p => p.theme.fontSizes[2]};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.body};

    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.tableBody};
  }

  td:nth-of-type(n + 3) {
    background-color: ${p => p.theme.colors.transparent};
  }
`;

export const ErrorRequest = styled.b`
  font-size: ${p => p.theme.fontSizes[3]};
  font-family: ${p => p.theme.fonts.body};

  color: ${p => p.theme.colors.error};
`;

export const MobileContactItem = styled.li`
  :not(:last-child) {
    padding-bottom: ${p => p.theme.space[4]}px;

    ::after {
      content: '';
      display: block;
      margin-top: ${p => p.theme.space[3]}px;
      width: 100%;
      height: 1px;
      background-color: white;
    }
  }
`;
