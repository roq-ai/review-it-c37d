import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createMediaGenre } from 'apiSdk/media-genres';
import { mediaGenreValidationSchema } from 'validationSchema/media-genres';
import { MediaInterface } from 'interfaces/media';
import { GenreInterface } from 'interfaces/genre';
import { getMedia } from 'apiSdk/media';
import { getGenres } from 'apiSdk/genres';
import { MediaGenreInterface } from 'interfaces/media-genre';

function MediaGenreCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: MediaGenreInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createMediaGenre(values);
      resetForm();
      router.push('/media-genres');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MediaGenreInterface>({
    initialValues: {
      media_id: (router.query.media_id as string) ?? null,
      genre_id: (router.query.genre_id as string) ?? null,
    },
    validationSchema: mediaGenreValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Media Genres',
              link: '/media-genres',
            },
            {
              label: 'Create Media Genre',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Media Genre
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <AsyncSelect<MediaInterface>
            formik={formik}
            name={'media_id'}
            label={'Select Media'}
            placeholder={'Select Media'}
            fetcher={getMedia}
            labelField={'title'}
          />
          <AsyncSelect<GenreInterface>
            formik={formik}
            name={'genre_id'}
            label={'Select Genre'}
            placeholder={'Select Genre'}
            fetcher={getGenres}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/media-genres')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'media_genre',
    operation: AccessOperationEnum.CREATE,
  }),
)(MediaGenreCreatePage);
