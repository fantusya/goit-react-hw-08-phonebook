import React from 'react';
import { FcConferenceCall, FcPhoneAndroid, FcCancel } from 'react-icons/fc';

import { useContacts } from 'hooks';
import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';
import {
  ContactListTable,
  ContactListTbody,
  ContactListThead,
  ErrorRequest,
} from './ContactList.styled';

const ContactList = () => {
  const { visibleContacts } = useContacts();
  const { contacts } = useContacts();
  const { isLoading } = useContacts();
  const { error } = useContacts();

  return (
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
          <tr key={contact.id}>
            <ContactItem contact={contact} />
          </tr>
        ))}
      </ContactListTbody>
    </ContactListTable>
  );
};

export default ContactList;
