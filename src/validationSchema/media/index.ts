import * as yup from 'yup';

export const mediaValidationSchema = yup.object().shape({
  title: yup.string().required(),
  type: yup.string().required(),
  release_date: yup.date().required(),
});
