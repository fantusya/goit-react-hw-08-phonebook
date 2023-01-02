import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';

import { Container } from 'constants/GlobalStyle';
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
    <main>
      <Box as="section" py={5}>
        <Container>
          <Box
            pl={[null, null, null, null, '50px']}
            display={['block', null, null, null, 'flex']}
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-around"
            gridGap={5}
            textAlign="center"
          >
            <PageTitle>Phonebook</PageTitle>
            <Box
              display={[null, null, null, null, 'inline-flex']}
              flexDirection={['column', null, null, null, 'row']}
              alignItems="flex-start"
              justifyContent="space-around"
              gridGap={['50px', null, null, null, '150px']}
            >
              <Box
                // display="inline-flex"
                // flexDirection="column"
                // alignItems="center"
                // justifyContent="center"
                mb={[5, null, null, null, 0]}
              >
                <ContactForm />
              </Box>
              <Box
                display="inline-flex"
                flexDirection="column"
                alignItems={['center', null, null, null, 'flex-start']}
              >
                <ContactsTitle>Contacts</ContactsTitle>
                <Filter />
                <ContactList />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
};

export default ContactsPage;
