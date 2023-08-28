import { Photo, PhotosCollection } from "../types/photo";
import { client } from "./axiosClient";

export const getPhotos = (page: number = 1, per_page: number = 10) => {
  return client.get<PhotosCollection>(`/photos?page=${page}&per_page=${per_page}`);
};

export const getPhoto = (id: string) => {
  return client.get<Photo>(`/photos/${id}`)
}