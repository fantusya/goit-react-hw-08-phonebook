import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';
import {
  FormLabelContainer,
  Field,
  FormLabel,
  FormBtn,
  ErrorMessageCustom,
} from '../Form/Form.styled';
import { Form } from './ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Only letters are allowed'
    )
    .min(2, 'At least 2 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),
  phone: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      ' Digits are allowed'
    )
    .min(5, 'At least 5 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const { contacts } = useContacts();

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

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
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
