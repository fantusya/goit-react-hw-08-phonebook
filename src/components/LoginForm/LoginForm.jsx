import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { logIn } from 'redux/auth/operations';
import {
  Form,
  FormLabelContainer,
  Field,
  FormLabel,
  FormBtn,
  ErrorMessageCustom,
} from '../Form/Form.styled';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Not valid email pattern')
    .min(6, 'At least 6 symbols')
    .required('Required field'),
  password: Yup.string()
    // .min(7, 'At least 7 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
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
            <FormBtn type="submit">Log In</FormBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
