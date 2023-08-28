import { call, put, takeEvery } from "redux-saga/effects";
import { getPhotos } from "../../api/api";
import { PhotosCollection } from "../../types/photo";
import { getPhotosSuccess } from "../reducers/photoCollectionState";

function* workGetPhotos(action: any): PhotosCollection | any {
  const { page, per_page } = action.payload;

  const photos = yield call(getPhotos, page, per_page);

  yield put(getPhotosSuccess(photos));
}

function* photoSaga() {
  yield takeEvery("photos/getPhotos", workGetPhotos);
}

export default photoSaga;
