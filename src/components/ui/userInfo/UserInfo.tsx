import { FC } from "react";

import mock from "../../assets/dasha-yukhymyuk-Mc911VCPEk0-unsplash.jpg";
import { User } from "../../../types/user";
import Paper from "../Paper/Paper";
import { Link } from "react-router-dom";

type Props = {
  user: User;
};

const UserInfo: FC<Props> = ({ user }) => {
  const { username, profile_image } = user;
  return (
    <Link to="/Artify">
      <Paper className="user-info">
        <div className="user-info__avatar">
          <img className="user-info__img" src={profile_image.small} alt="" />
        </div>
        <div className="user-info__content">
          <h5 className="user-info__name">{username}</h5>
        </div>
      </Paper>
    </Link>
  );
};

export default UserInfo;
