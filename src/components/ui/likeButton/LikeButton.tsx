import { FC, useState, MouseEventHandler } from "react";
import { AiFillHeart } from "react-icons/ai";
import classnames from "classnames";
const LikeButton: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setIsActive((prev) => !prev);
  };

  return (
    <button
      className={classnames("like-button", {
        "like-button--active": isActive,
      })}
      onClick={handleClick}
    >
      <div className="like-button__icon">
        <AiFillHeart />
      </div>
    </button>
  );
};

export default LikeButton;
