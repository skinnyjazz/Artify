import { FC } from "react";
import { Card, CardSize } from "../card/Card";
import { PhotosCollection } from "../../types/photo";
import { getCardSize } from "../../helpers/helper";

type Props = {
  photos: PhotosCollection;
};

const Gallery: FC<Props> = ({ photos }) => {
  return (
    <section className="gallery">
      {photos.map((photo, index) => {
        const size = getCardSize(index);

        return (
          <div className={`gallery__item gallery__item--${size}`}>
            <Card key={photo.id} cardSize={size} photo={photo} />
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
