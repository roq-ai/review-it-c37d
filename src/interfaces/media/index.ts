import { MediaGenreInterface } from 'interfaces/media-genre';
import { ReviewInterface } from 'interfaces/review';
import { GetQueryInterface } from 'interfaces';

export interface MediaInterface {
  id?: string;
  title: string;
  type: string;
  release_date: any;
  created_at?: any;
  updated_at?: any;
  media_genre?: MediaGenreInterface[];
  review?: ReviewInterface[];

  _count?: {
    media_genre?: number;
    review?: number;
  };
}

export interface MediaGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  type?: string;
}
