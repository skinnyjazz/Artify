import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gallery from "../components/gallery/Gallery";
import { Hero } from "../components/Hero/Hero";
import { useAppDispatch, useAppSelector } from "../store/store";
import { actions } from "../store/reducers/PhotosCollection/PhotosSlice";
import { fetchPhotos } from "../store/reducers/PhotosCollection/PhotosThunk";
import { useGalleryPagination } from "../hooks/useGalleryPagination";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { photos, page, isLoading, error } = useAppSelector(
    ({ photosCollectionSlice }) => photosCollectionSlice
  );

  useEffect(() => {
    dispatch(fetchPhotos({ page: String(page) }));
  }, [page]);
  useGalleryPagination();

  return (
    <section>
      <Hero />
      <Gallery photos={photos} />
    </section>
  );
};
