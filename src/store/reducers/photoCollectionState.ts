import { createSlice } from "@reduxjs/toolkit";
import { Photo } from "../../types/photo";

export interface PhotoState {
  photos: Photo[];
  page: number;
  isLoading: boolean;
}

 const initialState: PhotoState = {
  photos: [],
  page: 1,
  isLoading: false,
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    getPhotos: (state, payload) => {
      state.isLoading = true;
    },
    getPhotosSuccess: (state, action) => {
      state.photos = [...state.photos, ...action.payload];
      state.isLoading = false;
    },
    getPhotosFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getPhotos, getPhotosFailure, getPhotosSuccess, incrementPage } =
  photoSlice.actions;
export default photoSlice.reducer;
