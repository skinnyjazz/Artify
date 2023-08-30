import { photoStatistics } from "../pages/PhotoPage";
import { Photo, PhotosCollection } from "../types/photo";
import { client } from "./axiosClient";

export const getPhotos = (page: number = 1, per_page: number = 10) => {
  return client.get<PhotosCollection>(
    `/photos?page=${page}&per_page=${per_page}`
  );
};

export const getPhoto = (id: string) => {
  return client.get<Photo>(`/photos/${id}`);
};

export const getPhotoStatistics = (id: string) => {
  return client.get<photoStatistics>(`/photos/${id}/statistics`);
};
