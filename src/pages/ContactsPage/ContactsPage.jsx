import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';

import { PageTitle, ContactsTitle } from './ContactsPage.styled';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      pt={5}
      pl={7}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-around"
      gridGap={4}
    >
      <PageTitle>Phonebook</PageTitle>
      <Box
        display="inline-flex"
        alignItems="flex-start"
        justifyContent="space-around"
        gridGap="200px"
      >
        <Box
          display="inline-flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <ContactForm />
        </Box>
        <Box>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          <ContactList />
        </Box>
      </Box>
      {/* <ToastContainer autoClose={3000} /> */}
    </Box>
  );
};

export default ContactsPage;
