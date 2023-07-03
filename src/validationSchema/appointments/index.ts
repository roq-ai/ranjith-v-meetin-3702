import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  organization_id: yup.string().nullable(),
  client_id: yup.string().nullable(),
});
