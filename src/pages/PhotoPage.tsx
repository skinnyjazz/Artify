import { useEffect, useState, useCallback } from "react";
import { getPhoto, getPhotoStatistics } from "../api/api";
import { Photo } from "../types/photo";
import { UserCard } from "../components/userCard/UserCard";
import Gallery from "../components/gallery/Gallery";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export interface photoStatistics {
  downloads: {
    total: number;
  };
  views: {
    total: number;
  };
  likes: {
    total: number;
  };
}

const initialPhotoStatistic: photoStatistics = {
  downloads: {
    total: 0,
  },
  views: {
    total: 0,
  },
  likes: {
    total: 0,
  },
};

const PhotoPage = () => {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [photoStatistics, setPhotoStatistics] = useState<photoStatistics>(
    initialPhotoStatistic
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //@ts-ignore
  const { photos } = useSelector((state) => state.photos);
  const { id } = useParams();

  const loadPhoto = useCallback(async () => {
    if (id) {
      getPhoto(id).then(setPhoto);
      getPhotoStatistics(id).then((data) => {
        const downloads = data.downloads.total;
        const views = data.views.total;
        const likes = data.likes.total;

        const statistics: photoStatistics = {
          downloads: { total: downloads },
          views: { total: views },
          likes: { total: likes },
        };

        setPhotoStatistics(statistics);
        console.log(photoStatistics)
      });
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
