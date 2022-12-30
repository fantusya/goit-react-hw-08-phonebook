import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { register } from 'redux/auth/operations';
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
  email: Yup.string()
    .email('Invalid email pattern')
    .min(6, 'At least 6 symbols')
    .required('Required field'),
  password: Yup.string()
    .min(7, 'At least 7 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <FormLabelContainer>
              <Field
                name="name"
                type="text"
                placeholder="Anne-Marie O'Connor"
              />
              <FormLabel>Name</FormLabel>
              {errors.name && touched.name && (
                <ErrorMessageCustom component="span" name="name" />
              )}
            </FormLabelContainer>
            <FormLabelContainer>
              <Field
                name="email"
                type="email"
                placeholder="annette@mail.com (min 5 symbols before @)"
              />
              <FormLabel>Email</FormLabel>
              {errors.email && touched.email && (
                <ErrorMessageCustom component="span" name="email" />
              )}
            </FormLabelContainer>
            <FormLabelContainer>
              <Field name="password" type="password" placeholder="ann12345" />
              <FormLabel>Password</FormLabel>
              {errors.password && touched.password && (
                <ErrorMessageCustom component="span" name="password" />
              )}
            </FormLabelContainer>
            <FormBtn type="submit">Register</FormBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
