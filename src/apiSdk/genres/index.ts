import queryString from 'query-string';
import { GenreInterface, GenreGetQueryInterface } from 'interfaces/genre';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGenres = async (query?: GenreGetQueryInterface): Promise<PaginatedInterface<GenreInterface>> => {
  return fetcher('/api/genres', {}, query);
};

export const createGenre = async (genre: GenreInterface) => {
  return fetcher('/api/genres', { method: 'POST', body: JSON.stringify(genre) });
};

export const updateGenreById = async (id: string, genre: GenreInterface) => {
  return fetcher(`/api/genres/${id}`, { method: 'PUT', body: JSON.stringify(genre) });
};

export const getGenreById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/genres/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteGenreById = async (id: string) => {
  return fetcher(`/api/genres/${id}`, { method: 'DELETE' });
};
