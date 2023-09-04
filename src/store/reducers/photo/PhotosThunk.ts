import API from "../../../api/api";
import { AppDispatch } from "../../store";
import { actions } from "./PhotoSlice";

export const fetchPhoto = (id: string) => async (dispatch: AppDispatch) => {
  // console.log(dispatch);
  try {
    dispatch(actions.photoFetching());
    const photo = await API.getPhoto(id);
    dispatch(actions.photoFetchingSuccess(photo));
  } catch {
    dispatch(actions.photoFetchingError(""));
  }
};
