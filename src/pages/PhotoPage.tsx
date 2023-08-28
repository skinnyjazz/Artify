import { useEffect, useState, useCallback } from "react";
import { getPhoto } from "../api/api";
import { Photo } from "../types/photo";
import { UserCard } from "../components/userCard/UserCard";
import Gallery from "../components/gallery/Gallery";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const PhotoPage = () => {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //@ts-ignore
  const { photos } = useSelector((state) => state.photos);
  const { id } = useParams();

  const loadPhoto = useCallback(async () => {
    try {
      setIsLoading(true);
      getPhoto(`${id}`)
        .then(setPhoto)
        .finally(() => setIsLoading(false));
    } catch {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadPhoto();
  }, [loadPhoto]);

  return (
    <>
      {photo && !isLoading && (
        <div className="container photo-page">
          <img
            className="photo-page__img"
            src={photo.urls.full}
            alt={photo.alt_description}
          />
          <div className="photo-page__img-info">
            <h2 className="photo-page__title">{photo.alt_description}</h2>
            <p className="photo-page__description">{photo.description}</p>
          </div>

          <UserCard user={photo.user} />
        </div>
      )}

      {/* Just UI */}
      {photos.length && (
        <div className="related-gallery">
          <h1 className="photo-page__title related-gallery__title">
            Related Photos
          </h1>
          <Gallery photos={photos.slice(0, 15)} />
        </div>
      )}
    </>
  );
};

export default PhotoPage;
