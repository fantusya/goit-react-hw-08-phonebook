import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { useAuth } from 'hooks';
import {
  loginValidationSchema,
  emailValidationSchema,
} from 'helpers/validationSchemas';
import { logIn, resendVerifyEmail } from 'redux/auth/operations';
import { changeError } from 'redux/auth/slice';
import ModalMenu from 'components/ModalMenu';
import {
  ModalAvatarContent,
  CloseBtn,
} from 'components/ModalMenu/ModalMenu.styled';
import {
  Form,
  FormLabelContainer,
  Field,
  FormLabel,
  FormBtn,
  ErrorMessageCustom,
  VerifyMessage,
  ResendEmail,
} from '../Form/Form.styled';

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);

  const { error } = useAuth();

  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  const handleSubmitEmail = ({ email }, { resetForm }) => {
    dispatch(resendVerifyEmail({ email }));
    toast.info('Check your email', { pauseOnHover: false });
    resetForm();
    setShowModal(!showModal);
    dispatch(changeError());
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { pauseOnHover: false });
      // dispatch(changeError());
    }
  }, [error, dispatch]);

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
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

      {error && (
        <VerifyMessage>
          Have you verified your email? <br /> If you didn't receive an email
          when registering,{' '}
          <ResendEmail onClick={() => setShowModal(!showModal)}>
            click here
          </ResendEmail>{' '}
          to receive it again.
        </VerifyMessage>
      )}

      {showModal && (
        <ModalMenu onClose={() => setShowModal(!showModal)}>
          <ModalAvatarContent>
            <CloseBtn
              closeModal
              type="button"
              onClick={() => setShowModal(!showModal)}
            >
              &times;
            </CloseBtn>

            <Formik
              initialValues={{ email: '' }}
              onSubmit={handleSubmitEmail}
              validationSchema={emailValidationSchema}
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
                  <FormBtn type="submit">Send</FormBtn>
                </Form>
              )}
            </Formik>
          </ModalAvatarContent>
        </ModalMenu>
      )}
    </>
  );
};

export default LoginForm;
