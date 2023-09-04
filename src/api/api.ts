import { photoStatistics } from "../pages/PhotoPage";
import { Photo, PhotosCollection } from "../types/photo";
import { client } from "./axiosClient";

export type SearchParams = {
  [key: string]: string;
};

const getSearchWith = (params: SearchParams) => {
  if (!params) {
    return "";
  }
  const paramsArr: string[] = Object.entries(params).map(
    ([key, value]) => `${key}=${value}`
  );

  return "?" + paramsArr.join("&");
};

const getPhotos = (
  params: SearchParams = {
    page: "1",
    per_page: "10",
  }
) => {
  return client.get<PhotosCollection>(`/photos${getSearchWith(params)}`);
};

const searchPhotos = (
  params: SearchParams = { query: "", page: "1", per_page: "10" }
) => {
  return client.get<PhotosCollection>(`/search/photos${getSearchWith(params)}`);
};

const getPhoto = (id: string) => {
  return client.get<Photo>(`/photos/${id}`);
};

const API = {
  getPhotos,
  getPhoto,
};

export default API;
