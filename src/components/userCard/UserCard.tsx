import { FC } from "react";
import { User } from "../../types/user";

type Props = {
  user: User;
};

export const UserCard: FC<Props> = ({ user }) => {
  const avatar = user.profile_image.small;
  const { username, bio } = user;
  return (
    <div className="user-card">
      <div className="user-card__info">
        <div className="user-card__avatar">
          <img className="user-card__img" src={avatar} alt="profile img" />
        </div>
        <h4 className="user-card__username">{username}</h4>
      </div>
      <p className="user-card__bio">{bio}</p>
    </div>
  );
};
