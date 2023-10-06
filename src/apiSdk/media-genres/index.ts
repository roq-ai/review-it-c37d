import queryString from 'query-string';
import { MediaGenreInterface, MediaGenreGetQueryInterface } from 'interfaces/media-genre';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMediaGenres = async (
  query?: MediaGenreGetQueryInterface,
): Promise<PaginatedInterface<MediaGenreInterface>> => {
  return fetcher('/api/media-genres', {}, query);
};

export const createMediaGenre = async (mediaGenre: MediaGenreInterface) => {
  return fetcher('/api/media-genres', { method: 'POST', body: JSON.stringify(mediaGenre) });
};

export const updateMediaGenreById = async (id: string, mediaGenre: MediaGenreInterface) => {
  return fetcher(`/api/media-genres/${id}`, { method: 'PUT', body: JSON.stringify(mediaGenre) });
};

export const getMediaGenreById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/media-genres/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMediaGenreById = async (id: string) => {
  return fetcher(`/api/media-genres/${id}`, { method: 'DELETE' });
};
