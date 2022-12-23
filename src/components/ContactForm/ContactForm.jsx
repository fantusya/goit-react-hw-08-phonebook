import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';
import {
  Form,
  FormLabelContainer,
  Field,
  FormLabel,
  FormBtn,
  ErrorMessageCustom,
} from '../Form/Form.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Only letters are allowed'
    )
    .min(2, 'At least 2 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),
  number: Yup.string()
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

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isNameExistInPhonebook = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExistInPhonebook) {
      toast.error(`${name} is already in contacts`, {
        pauseOnHover: false,
      });
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <FormLabelContainer>
            <Field name="name" type="text" placeholder="Anne-Marie O'Connor" />
            <FormLabel>Name</FormLabel>
            {errors.name && touched.name ? (
              <ErrorMessageCustom component="span" name="name" />
            ) : null}
          </FormLabelContainer>
          <FormLabelContainer>
            <Field name="number" type="tel" placeholder="+38-(012)-345-67-89" />
            <FormLabel>Number</FormLabel>
            {errors.number && touched.number ? (
              <ErrorMessageCustom component="span" name="number" />
            ) : null}
          </FormLabelContainer>
          <FormBtn type="submit">Add contact</FormBtn>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
