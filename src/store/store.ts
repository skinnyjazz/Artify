import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";

import photosCollectionSlice from "./reducers/PhotosCollection/PhotosSlice";
import photoSlice from "./reducers/photo/PhotoSlice";

const rootReducer = combineReducers({
  photosCollectionSlice,
  photoSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
