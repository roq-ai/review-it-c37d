import { MediaGenreInterface } from 'interfaces/media-genre';
import { GetQueryInterface } from 'interfaces';

export interface GenreInterface {
  id?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  media_genre?: MediaGenreInterface[];

  _count?: {
    media_genre?: number;
  };
}

export interface GenreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
