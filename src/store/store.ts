import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import photosReducer from "./reducers/photoCollectionState";
import photoSaga from "./sagas/photoCollectionSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
  middleware: [saga],
});
saga.run(photoSaga);
