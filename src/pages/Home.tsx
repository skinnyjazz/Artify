import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGalleryPagination } from "../hooks/useGalleryPagination";
import { PhotoState, getPhotos } from "../store/reducers/photoCollectionState";
import Gallery from "../components/gallery/Gallery";
import { Hero } from "../components/Hero/Hero";

export const Home = () => {
  //@ts-ignore
  const { page, photos } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos({ page, perPage: 10 }));
  }, [dispatch, page]);
  console.log(photos);

  useGalleryPagination();

  return (
    <section>
      <Hero />
      <Gallery photos={photos} />
    </section>
  );
};
