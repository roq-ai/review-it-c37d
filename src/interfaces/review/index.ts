import { UserInterface } from 'interfaces/user';
import { MediaInterface } from 'interfaces/media';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  title: string;
  content: string;
  rating: number;
  user_id: string;
  media_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  media?: MediaInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  user_id?: string;
  media_id?: string;
}
