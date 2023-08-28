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

        return <Card key={photo.id} cardSize={size} photo={photo} />;
      })}
    </section>
  );
};

export default Gallery;
