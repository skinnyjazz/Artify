import API, { SearchParams } from "../../../api/api";
import { AppDispatch } from "../../store";
import { actions } from "./PhotosSlice";

export const fetchPhotos = (params: SearchParams) => async (
  dispatch: AppDispatch
) => {
  console.log(dispatch);
  try {
    dispatch(actions.photosFetching());
    const photos = await API.getPhotos(params);
    dispatch(actions.photosFetchingSuccess(photos));
  } catch {
    dispatch(actions.photosFetchingError(""));
  }
};
