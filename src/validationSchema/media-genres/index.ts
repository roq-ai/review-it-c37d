import * as yup from 'yup';

export const mediaGenreValidationSchema = yup.object().shape({
  media_id: yup.string().nullable().required(),
  genre_id: yup.string().nullable().required(),
});
