import { UrlList } from "./photo";

export interface Profile_image {
  small: string;
  medium: string;
  large: string;
}

export interface UsersLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  profile_image: UrlList;
  links: UrlList;
}
