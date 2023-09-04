import { UrlList } from "./photo";

export interface Profile_image {
  small: string;
  medium: string;
  large: string;
}


export interface User {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;

  links: UrlList;
  profile_image: UrlList;
}
