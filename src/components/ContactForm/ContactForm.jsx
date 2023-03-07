import { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from 'redux/contacts/operations';
import { changeError } from 'redux/auth/slice';
import { useContacts } from 'hooks';
import { contactValidationSchema } from 'helpers/validationSchemas';
import {
  FormLabelContainer,
  Field,
  FormLabel,
  FormBtn,
  ErrorMessageCustom,
} from '../Form/Form.styled';
import { Form } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();

  const { contacts, error } = useContacts();

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const isNameExistInPhonebook = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExistInPhonebook) {
      toast.error(`${name} is already in contacts`, {
        pauseOnHover: false,
      });
      return;
    }

    dispatch(addContact({ name, phone }));
    resetForm();
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { pauseOnHover: false });
      dispatch(changeError());
    }
  }, [error, dispatch]);

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactValidationSchema}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <FormLabelContainer>
            <Field name="name" type="text" placeholder="Anne-Marie O'Connor" />
            <FormLabel>Name</FormLabel>
            {errors.name && touched.name && (
              <ErrorMessageCustom component="span" name="name" />
            )}
          </FormLabelContainer>
          <FormLabelContainer>
            <Field name="phone" type="tel" placeholder="+38-(012)-345-67-89" />
            <FormLabel>Number</FormLabel>
            {errors.phone && touched.phone && (
              <ErrorMessageCustom component="span" name="phone" />
            )}
          </FormLabelContainer>
          <FormBtn type="submit">Add contact</FormBtn>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
