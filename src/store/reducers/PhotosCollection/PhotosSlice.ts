import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PhotosCollection } from "../../../types/photo";

export interface PhotosState {
  photos: PhotosCollection;
  page: number;
  isLoading: boolean;
  error: string;
}

const initialState: PhotosState = {
  photos: [],
  page: 1,
  isLoading: false,
  error: "",
};

export const photosCollectionSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    photosFetching(state) {
      state.isLoading = true;
    },
    photosFetchingSuccess(state, action: PayloadAction<PhotosCollection>) {
      state.isLoading = false;
      state.photos = [...state.photos, ...action.payload];
    },
    photosFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const actions = photosCollectionSlice.actions;
export default photosCollectionSlice.reducer;
