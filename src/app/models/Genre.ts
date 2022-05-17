import { Song } from './Song';

export interface Genre {
  id: string;
  genre: string;
  data: Array<Song>;
}
