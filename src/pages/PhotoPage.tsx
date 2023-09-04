import { useEffect, useState, useCallback } from "react";
import { getPhoto, getPhotoStatistics } from "../api/api";
import { Photo, initialPhoto } from "../types/photo";
import { UserCard } from "../components/userCard/UserCard";
import Gallery from "../components/gallery/Gallery";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import LikeButton from "../components/ui/likeButton/LikeButton";
import Paper from "../components/ui/Paper/Paper";
import { Tranding } from "../components/Tranding/Tranding";
import UserInfo from "../components/ui/cardUserInfo/CardUserInfo";
import { Link } from "react-router-dom";

export interface photoStatistics {
  downloads: {
    total: 0;
  };
  views: {
    total: 0;
  };
  likes: {
    total: 0;
  };
}

const capitalize = (title: string) => {
  if (!title) {
    return "";
  }
  const firstLatter = title[0].toUpperCase();

  return firstLatter + title.slice(1);
};

const PhotoPage = () => {
  const [photo, setPhoto] = useState<Photo>(initialPhoto);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { photoId } = useParams();

  const loadPhoto = useCallback(async () => {
    if (photoId) {
      getPhoto(photoId).then(setPhoto);
    }
  }, [photoId]);

  useEffect(() => {
    loadPhoto();
  }, [photoId, loadPhoto]);

  const {
    id,
    blur_hash,
    downloads,
    likes,
    liked_by_user,
    public_domain,
    alt_description,
    description,
    location,
    tags,
    urls,
    links,
    user,
  } = photo;

  const title = capitalize(alt_description);
  console.log(user);
  const { username, profile_image, bio } = user;

  console.log(photo);
  return (
    <>
      {/* {photo && !isLoading && ( */}
      <div className="photo-page photo-page__container">
        <div className="photo-page__wrapper">
          <div className="photo-page__img">
            <img src={urls.full} alt={alt_description} />
          </div>

          <div className="photo-page__content">
            {/* <Tranding /> */}
            <div className="photo-page__menu">
              <div className="photo-page__menu__buttons">
                <LikeButton />
                {/* <LikeButton /> */}
                {/* <LikeButton /> */}
              </div>
              {/* <button className="photo-page__menu__download">x</button> */}
            </div>
            <Paper className="photo-page__info">
              <h3 className="photo-page__title">{title}</h3>
              {description ? (
                <p className="photo-page__description">{description}</p>
              ) : (
                <p className="photo-page__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, magni at hic culpa modi ab officia accusantium
                  praesentium optio quas?
                </p>
              )}
            </Paper>
            <Link to="/Artify">
              <Paper className="photo-page__user-info">
                <div className="photo-page__user-info__img">
                  <img src={profile_image.small} alt="" />
                </div>
                <div className="photo-page__user-info__content">
                  <h4 className="photo-page__user-info__username">
                    {username}
                  </h4>
                  <p className="photo-page__user-info__bio">{bio}</p>
                </div>
              </Paper>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoPage;
