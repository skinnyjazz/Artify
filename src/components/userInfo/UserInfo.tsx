import { FC } from "react";

import mock from "../../assets/dasha-yukhymyuk-Mc911VCPEk0-unsplash.jpg";
import { User } from "../../types/user";

type Props = {
  user: User;
};

const UserInfo: FC<Props> = ({ user }) => {
  const { username, profile_image } = user;
  return (
    <article className="user-info">
      <div className="user-info__avatar">
        <img className="user-info__img" src={profile_image.small} alt="" />
      </div>
      <div className="user-info__content">
        <h5 className="user-info__name">{username}</h5>
      </div>
    </article>
  );
};

export default UserInfo;
