import { useEffect } from "react";
import { useDispatch } from "react-redux/";
import { actions as PhotoSliceActions } from "../store/reducers/PhotosCollection/PhotosSlice";

export const useGalleryPagination = () => {
  const dispatch = useDispatch();
  const { incrementPage } = PhotoSliceActions;

  useEffect(() => {
    const handleScrole = () => {
      const currentPosition = window.pageYOffset;
      const pagCondition =
        currentPosition >
        document.documentElement.scrollHeight - window.innerHeight - 300;

      if (pagCondition) {
        dispatch(incrementPage());
      }
    };

    window.addEventListener("scroll", handleScrole);

    return () => window.removeEventListener("scroll", handleScrole);
  }, [dispatch]);
};
