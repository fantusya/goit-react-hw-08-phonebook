import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { changeError } from 'redux/auth/slice';

import { registerValidationSchema } from 'helpers/validationSchemas';
import { useAuth } from 'hooks';
import { register } from 'redux/auth/operations';
import {
  Form,
  FormLabelContainer,
  Field,
  FormLabel,
  FormBtn,
  ErrorMessageCustom,
} from '../Form/Form.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ email, password }));
    resetForm();
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { pauseOnHover: false, theme: 'colored' });
      dispatch(changeError());
    }
  }, [error, dispatch]);

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={registerValidationSchema}
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
