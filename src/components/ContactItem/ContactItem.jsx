import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Box } from 'components/Box/Box';
import {
  FcConferenceCall,
  FcPhoneAndroid,
  FcFullTrash,
  FcCancel,
  FcCheckmark,
} from 'react-icons/fc';
import { IoMdStarOutline, IoMdStar } from 'react-icons/io';
import { RiQuillPenFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

import {
  deleteContact,
  updateContact,
  updateFavorite,
} from 'redux/contacts/operations';
import {
  MobileContactInfo,
  MobileContactText,
  TableBtn,
  InputChange,
} from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const [showInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newPhone, setNewPhone] = useState(contact.phone);

  const dispatch = useDispatch();

  const isMobile = useMediaQuery({
    query: '(min-device-width: 480px)',
  });

  const handleDelete = () => dispatch(deleteContact(contact._id));

  const handleFavorite = () =>
    dispatch(
      updateFavorite({ contactId: contact._id, favorite: !contact.favorite })
    );

  const handleConfirm = e => {
    e.preventDefault();
    if (newName.length < 2) {
      toast.error(`Name must be more than 2 symbols`, {
        pauseOnHover: false,
      });
      return;
    }
    if (newPhone.length < 5) {
      toast.error(`Phone must be more than 5 symbols`, {
        pauseOnHover: false,
      });
      return;
    }
    dispatch(
      updateContact({ contactId: contact._id, name: newName, phone: newPhone })
    );
    setShowInput(!showInput);
  };

  return showInput ? (
    isMobile ? (
      <>
        <td>
          <Box display="flex" alignItems="center" gridGap={4}>
            <TableBtn type="button" onClick={handleFavorite} favoriteBtn>
              {contact.favorite ? (
                <IoMdStar color="gold" size={20} />
              ) : (
                <IoMdStarOutline color="gold" size={20} />
              )}
            </TableBtn>
            <InputChange
              type="text"
              name="name"
              value={newName}
              onChange={e => setNewName(e.currentTarget.value)}
            />
          </Box>
        </td>
        <td>
          <InputChange
            type="text"
            name="phone"
            value={newPhone}
            onChange={e => setNewPhone(e.currentTarget.value)}
          />
        </td>
        <td>
          <TableBtn type="submit" onClick={handleConfirm} confirmBtn>
            <FcCheckmark size={30} />
          </TableBtn>
        </td>
        <td>
          <TableBtn
            type="button"
            onClick={e => setShowInput(!showInput)}
            cancelBtn
          >
            <FcCancel size={30} />
          </TableBtn>
        </td>
      </>
    ) : (
      <Box as="ul" display="flex" flexDirection="column" gridGap={4}>
        <MobileContactInfo>
          <FcConferenceCall size={25} />
          <InputChange
            type="text"
            name="name"
            value={newName}
            onChange={e => setNewName(e.currentTarget.value)}
          />
        </MobileContactInfo>
        <MobileContactInfo>
          <FcPhoneAndroid size={25} />
          <InputChange
            type="text"
            name="phone"
            value={newPhone}
            onChange={e => setNewPhone(e.currentTarget.value)}
          />
        </MobileContactInfo>
        <MobileContactInfo>
          {contact.favorite ? (
            <>
              <TableBtn type="button" onClick={handleFavorite} favoriteBtn>
                <IoMdStar color="gold" size={20} />
                <MobileContactText>Not favorite</MobileContactText>
              </TableBtn>
            </>
          ) : (
            <>
              <TableBtn type="button" onClick={handleFavorite} favoriteBtn>
                <IoMdStarOutline color="gold" size={20} />
              </TableBtn>
              <MobileContactText>To favorites</MobileContactText>
            </>
          )}
        </MobileContactInfo>
        <MobileContactInfo>
          <TableBtn type="submit" onClick={handleConfirm} confirmBtn>
            <FcCheckmark size={30} />
            <MobileContactText>Confirm</MobileContactText>
          </TableBtn>
        </MobileContactInfo>
        <MobileContactInfo>
          <TableBtn
            type="button"
            onClick={e => setShowInput(!showInput)}
            cancelBtn
          >
            <FcCancel size={30} />
            <MobileContactText>Cancel</MobileContactText>
          </TableBtn>
        </MobileContactInfo>
      </Box>
    )
  ) : isMobile ? (
    <>
      <td>
        <Box display="flex" alignItems="center" gridGap={4}>
          <TableBtn type="button" onClick={handleFavorite} favoriteBtn>
            {contact.favorite ? (
              <IoMdStar color="gold" size={20} />
            ) : (
              <IoMdStarOutline color="gold" size={20} />
            )}
          </TableBtn>
          <p>{contact.name}</p>
        </Box>
      </td>
      <td>
        <p>{contact.phone}</p>
      </td>
      <td>
        <TableBtn
          type="button"
          onClick={() => setShowInput(!showInput)}
          changeBtn
        >
          <RiQuillPenFill color="gold" size={30} />
        </TableBtn>
      </td>
      <td>
        <TableBtn type="button" onClick={handleDelete} deleteBtn>
          <FcFullTrash size={30} />
        </TableBtn>
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
        <MobileContactText>{contact.phone}</MobileContactText>
      </MobileContactInfo>
      <MobileContactInfo>
        {contact.favorite ? (
          <>
            <TableBtn type="button" onClick={handleFavorite} favoriteBtn>
              <IoMdStar color="gold" size={20} />
            </TableBtn>
            <MobileContactText>Not favorite</MobileContactText>
          </>
        ) : (
          <>
            <TableBtn type="button" onClick={handleFavorite} favoriteBtn>
              <IoMdStarOutline color="gold" size={20} />
            </TableBtn>
            <MobileContactText>To favorites</MobileContactText>
          </>
        )}
      </MobileContactInfo>
      <MobileContactInfo>
        <TableBtn
          type="button"
          onClick={() => setShowInput(!showInput)}
          changeBtn
        >
          <RiQuillPenFill color="gold" size={25} />
        </TableBtn>
        <MobileContactText>Edit</MobileContactText>
      </MobileContactInfo>
      <MobileContactInfo>
        <TableBtn type="button" onClick={handleDelete} deleteBtn>
          <FcFullTrash size={25} />
        </TableBtn>
        <MobileContactText>Delete</MobileContactText>
      </MobileContactInfo>
    </Box>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    // name: PropTypes.string.isRequired,
    name: PropTypes.string,
    phone: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};
