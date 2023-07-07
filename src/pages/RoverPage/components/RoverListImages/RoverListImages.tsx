import React from 'react';
import { PhotoModel } from '../../../../models';
import { RoverImage } from '../RoverImage';

export type RoverListImagesProps = {
  photos: PhotoModel[];
};

const RoverListImages: React.FC<RoverListImagesProps> = ({ photos }) => {
  return (
    <div>
      {photos
        .slice(0, 3)
        ?.map((photo) => <RoverImage key={photo.id} photo={photo} />)}
    </div>
  );
};

export default RoverListImages;
