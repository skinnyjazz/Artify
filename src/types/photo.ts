import { User } from "./user";

export interface UrlList {
  [key: string]: string;
};

export interface Photo {
  id: string;
  description: string;
  alt_description: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  urls: UrlList;
  links: UrlList;

  user: User;
}

export type PhotosCollection = Photo[];
