import { url } from "inspector";
import { FC, memo } from "react";

type Props = {
  imges: string[];
};

export const HeroBG: FC<Props> = ({ imges }) => {
  return (
    <div className="hero-section__bg">
      {imges.map((img) => (
        <div
          key={img}
          className="hero-section__item"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          {/* <img src={img} alt="" /> */}
        </div>
      ))}
    </div>
  );
};
