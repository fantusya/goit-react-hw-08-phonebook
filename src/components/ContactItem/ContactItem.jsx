import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Box } from 'components/Box/Box';
import { FcConferenceCall, FcPhoneAndroid, FcFullTrash } from 'react-icons/fc';

import { deleteContact } from 'redux/contacts/operations';
import {
  MobileContactInfo,
  MobileContactText,
  DeleteBtn,
} from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  const isMobile = useMediaQuery({
    query: '(min-device-width: 480px)',
  });

  return isMobile ? (
    <>
      <td>{contact.name}</td>
      <td>{contact.number}</td>
      <td>
        <DeleteBtn type="button" onClick={handleDelete}>
          <FcFullTrash size={30} />
        </DeleteBtn>
      </td>
    </>
  ) : (
    <Box as="ul" display="flex" flexDirection="column" gridGap={4}>
      <MobileContactInfo>
        <FcConferenceCall size={25} />
        <MobileContactText>{contact.name}</MobileContactText>
      </MobileContactInfo>
      <MobileContactInfo>
        <FcPhoneAndroid size={25} />
        <MobileContactText>{contact.number}</MobileContactText>
      </MobileContactInfo>
      <MobileContactInfo>
        <DeleteBtn type="button" onClick={handleDelete}>
          <FcFullTrash size={25} />
        </DeleteBtn>
        <MobileContactText>Delete contact</MobileContactText>
      </MobileContactInfo>
    </Box>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
