import { User } from "./user";

export interface UrlList {
  [key: string]: string;
}

interface Location {
  city: string;
  country: string;
  position: {
    latitude: number;
    longitude: number;
  };
}

interface Tag {
  title: string;
}

type TagCollection = Tag[];

export interface Photo {
  id: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  public_domain: boolean;
  alt_description: string;
  description: string;

  location: Location;

  tags: TagCollection;

  urls: UrlList;
  links: UrlList;

  user: User;
}

export const initialPhoto: Photo = {
  id: "",

  blur_hash: "",
  downloads: 0,
  likes: 0,
  liked_by_user: false,
  public_domain: false,
  description: "",
  alt_description: "",

  location: {
    city: "",
    country: "",
    position: {
      latitude: 0,
      longitude: 0,
    },
  },
  tags: [{ title: "" }, { title: "" }, { title: "" }],

  urls: {
    raw: "",
    full: "",
    regular: "",
    small: "",
    thumb: "",
  },
  links: {
    self: "",
    html: "",
    download: "",
    download_location: "",
  },
  user: {
    id: "",
    username: "",
    name: "",
    portfolio_url: "",
    bio: "",
    location: "",
    total_likes: 0,
    total_photos: 0,
    total_collections: 0,
    links: {
      self: "",
      html: "",
      photos: "",
      likes: "",
      portfolio: "",
    },
    profile_image: {
      self: "",
      html: "",
      photos: "",
      likes: "",
      portfolio: "",
    },
  },
};

export type PhotosCollection = Photo[];
