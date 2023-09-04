import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Photo, PhotosCollection, initialPhoto } from "../../../types/photo";

export interface PhotoState {
  photo: Photo;
  isLoading: boolean;
  error: string;
}

const initialState: PhotoState = {
  photo: initialPhoto,
  isLoading: false,
  error: "",
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    photoFetching(state) {
      state.isLoading = true;
    },
    photoFetchingSuccess(state, action: PayloadAction<Photo>) {
      state.isLoading = false;
      state.photo = action.payload;
    },
    photoFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    photoUnmount(state) {
      state = initialState;
      console.log(state);
    },
  },
});

export const actions = photoSlice.actions;
export default photoSlice.reducer;
