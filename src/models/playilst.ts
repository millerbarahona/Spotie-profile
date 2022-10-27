import { Track } from "./track";

export interface Playlist {
  collaborative: boolean;
  description:   string;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  images:        Image[];
  name:          string;
  owner:         Owner;
  primary_color: null;
  public:        boolean;
  snapshot_id:   string;
  tracks:        Tracks;
  type:          ItemType;
  uri:           string;
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: number | null;
  url:    string;
  width:  number | null;
}

interface Owner {
  display_name:  string;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  type:          OwnerType;
  uri:           string;
}

enum OwnerType {
  User = "user",
}

interface Tracks {
  href:  string;
  total: number;
  items: PlaylistTrack[]
}

enum ItemType {
  Playlist = "playlist",
}

export interface PlaylistTrack {
  added_at:        Date;
  added_by:        AddedBy;
  is_local:        boolean;
  primary_color:   null;
  track:           Track;
  video_thumbnail: VideoThumbnail;
}

export interface AddedBy {
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  type:          string;
  uri:           string;
  name?:         string;
}

export interface VideoThumbnail {
  url: null;
}