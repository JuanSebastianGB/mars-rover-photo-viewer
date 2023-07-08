import React, { useCallback, useRef } from 'react';
import { PhotoModel } from '../../../../models';
import { useSelectValue } from '../../../context';
import { RoverImage } from '../RoverImage';
import styles from './RoverListImages.module.css';

export type RoverListImagesProps = {
  photos: PhotoModel[];
  loading: boolean;
  hasNextPage: boolean;
};

const RoverListImages: React.FC<RoverListImagesProps> = ({
  photos,
  loading,
  hasNextPage,
}) => {
  const { incrementPage } = useSelectValue();
  const intObserver = useRef<any>();
  const lastRoverRef = useCallback(
    (rover: PhotoModel) => {
      if (loading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((rovers) => {
        if (rovers[0].isIntersecting && hasNextPage) {
          console.log('Almost there...');
          incrementPage();
        }
      });
      if (rover) intObserver.current.observe(rover);
    },
    [loading, hasNextPage, incrementPage]
  );

  return (
    <div className={styles.roverlistimages}>
      {photos?.map((photo, index) => {
        if (photos.length === index + 1) {
          //@ts-ignore
          return <RoverImage ref={lastRoverRef} key={photo.id} photo={photo} />;
        }
        return <RoverImage key={photo.id} photo={photo} />;
      })}
    </div>
  );
};

export default RoverListImages;
