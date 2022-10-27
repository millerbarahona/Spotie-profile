import { Playlist } from "./playilst";

export interface PlaylistsResponse {
  href:     string;
  items:    Playlist[];
  limit:    number;
  next:     string;
  offset:   number;
  previous: null;
  total:    number;
}