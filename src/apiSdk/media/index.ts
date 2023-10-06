import queryString from 'query-string';
import { MediaInterface, MediaGetQueryInterface } from 'interfaces/media';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMedia = async (query?: MediaGetQueryInterface): Promise<PaginatedInterface<MediaInterface>> => {
  return fetcher('/api/media', {}, query);
};

export const createMedia = async (media: MediaInterface) => {
  return fetcher('/api/media', { method: 'POST', body: JSON.stringify(media) });
};

export const updateMediaById = async (id: string, media: MediaInterface) => {
  return fetcher(`/api/media/${id}`, { method: 'PUT', body: JSON.stringify(media) });
};

export const getMediaById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/media/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMediaById = async (id: string) => {
  return fetcher(`/api/media/${id}`, { method: 'DELETE' });
};
