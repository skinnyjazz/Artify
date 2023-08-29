import { FC } from "react";
import LikeButton from "../ui/likeButton/LikeButton";
import UserInfo from "../userInfo/UserInfo";
import { Photo } from "../../types/photo";
import { Link } from "react-router-dom";

export type CardSize = "small" | "medium" | "large";

type Props = {
  cardSize: CardSize;
  photo: Photo;
};

export const Card: FC<Props> = ({ cardSize, photo }) => {
  const { urls, user } = photo;

  return (
    <Link to={`/Artify/${photo.id}`} className={`card card--${cardSize}`}>
      <img src={urls.regular} alt="" className="card__img" />

      <div className="card__content">
        <div className="card__content-wrap">
          <LikeButton />
          <UserInfo user={user} />
        </div>
      </div>
    </Link>
  );
};
