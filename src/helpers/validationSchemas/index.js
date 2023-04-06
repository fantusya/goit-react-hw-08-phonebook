import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
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

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Not valid email pattern')
    .min(6, 'At least 6 symbols')
    .required('Required field'),
  password: Yup.string()
    // .min(7, 'At least 7 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),
});

export const emailValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .min(6, 'At least 6 symbols')
    .required('Required field'),
});

export const contactValidationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Only letters are allowed'
    )
    .min(2, 'At least 2 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),
  phone: Yup.string()
    .matches(/[+]?[(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{4,6}/, 'Invalid phone')
    .min(5, 'At least 5 symbols')
    .max(30, 'Maximum 30 symbols')
    .required('Required field'),
});
