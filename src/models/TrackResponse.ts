import { Track } from "./track";

export interface TrackResponse {
  items:    Track[];
  total:    number;
  limit:    number;
  offset:   number;
  href:     string;
  previous: null;
  next:     null;
}