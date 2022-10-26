import { Artists } from "./artist";

export interface ArtistRespone {
  items:    Artists[];
  Total:    number;
  limit:    number;
  offset:   number;
  href:     string;
  previous: null;
  next:     null;
}
