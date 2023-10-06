import { MediaInterface } from 'interfaces/media';
import { GenreInterface } from 'interfaces/genre';
import { GetQueryInterface } from 'interfaces';

export interface MediaGenreInterface {
  id?: string;
  media_id: string;
  genre_id: string;
  created_at?: any;
  updated_at?: any;

  media?: MediaInterface;
  genre?: GenreInterface;
  _count?: {};
}

export interface MediaGenreGetQueryInterface extends GetQueryInterface {
  id?: string;
  media_id?: string;
  genre_id?: string;
}
