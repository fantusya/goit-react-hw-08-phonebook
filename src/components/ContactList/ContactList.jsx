import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box } from 'components/Box/Box';
import { FcConferenceCall, FcPhoneAndroid, FcCancel } from 'react-icons/fc';

import { useContacts } from 'hooks';
import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';
import {
  ContactListTable,
  ContactListTbody,
  ContactListThead,
  ErrorRequest,
  MobileContactItem,
} from './ContactList.styled';

const ContactList = () => {
  const { visibleContacts, contacts, isLoading, error } = useContacts();
  // console.log(visibleContacts);
  // const { contacts } = useContacts();
  // const { isLoading } = useContacts();
  // const { error } = useContacts();

  const isMobile = useMediaQuery({
    query: '(min-device-width: 480px)',
  });

  return isMobile ? (
    <ContactListTable>
      <ContactListThead>
        <tr>
          <th>
            {isLoading && !error && <Loader sizeValue="40" />}
            {!isLoading && <FcConferenceCall size={40} />}
            {error && <FcCancel size={40} />}
          </th>
          <th>
            {isLoading && !error && <Loader sizeValue="40" />}
            {!isLoading && <FcPhoneAndroid size={40} />}
            {error && contacts.length === 0 && (
              <ErrorRequest>Error! Try again!</ErrorRequest>
            )}
          </th>
        </tr>
      </ContactListThead>
      <ContactListTbody>
        {visibleContacts.map(contact => (
          <tr key={contact._id}>
            <ContactItem contact={contact} />
          </tr>
        ))}
      </ContactListTbody>
    </ContactListTable>
  ) : (
    <>
      {isLoading && !error && <Loader sizeValue="60" />}
      {error && (
        <>
          <FcCancel size={60} />
          <ErrorRequest>Error! Try again!</ErrorRequest>
        </>
      )}
      <Box as="ul" display="flex" flexDirection="column" gridGap={4}>
        {visibleContacts.map(contact => (
          <MobileContactItem key={contact._id}>
            <ContactItem contact={contact} />
          </MobileContactItem>
        ))}
      </Box>
    </>
  );
};

export default ContactList;
