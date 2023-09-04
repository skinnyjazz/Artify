import { FC } from "react";

import mock from "../../assets/dasha-yukhymyuk-Mc911VCPEk0-unsplash.jpg";
import { User } from "../../../types/user";
import Paper from "../Paper/Paper";
import { Link } from "react-router-dom";

type Props = {
  user: User;
};

const CardUserInfo: FC<Props> = ({ user }) => {
  const { username, profile_image } = user;
  return (
    <Link to="/Artify">
      <Paper className="card-user-info">
        <div className="card-user-info__avatar">
          <img
            className="card-user-info__img"
            src={profile_image.small}
            alt=""
          />
        </div>
        <div className="card-user-info__content">
          <h5 className="card-user-info__name">{username}</h5>
        </div>
      </Paper>
    </Link>
  );
};

export default CardUserInfo;
