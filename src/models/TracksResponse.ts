import { Tracks } from "./tracks";

interface TracksRespone {
  items:    Tracks[];
  Total:    number;
  limit:    number;
  offset:   number;
  href:     string;
  previous: null;
  next:     null;
}

enum Type {
  Artist = "artist",
}

export default TracksRespone
