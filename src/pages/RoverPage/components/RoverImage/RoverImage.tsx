import { forwardRef } from 'react';
import { ButtonAddFavorite } from '../../../../components/ButtonAddFavorite';
import { ButtonDeleteFavorite } from '../../../../components/ButtonDeleteFavorite';
import { useStore } from '../../../../hooks';
import { PhotoModel } from '../../../../models';

interface RoverImageProps {
  photo: PhotoModel;
}

const RoverImage: React.FC<RoverImageProps> = forwardRef(({ photo }, ref) => {
  const favorites = useStore((state) => state.favorites);
  const inFavorite = favorites.some((item) => item.id === photo.id);

  const content = ref ? (
    //@ts-ignore
    <div ref={ref}>
      <img src={photo.img_src} alt={photo.img_src} />
      <p>{photo.earth_date}</p>
      <div>
        sol:
        {photo.sol}
      </div>
      <div>
        camera:
        {photo.camera.full_name}
      </div>
      {!inFavorite ? (
        <ButtonAddFavorite photo={photo} />
      ) : (
        <ButtonDeleteFavorite photo={photo} />
      )}
    </div>
  ) : (
    <div>
      <img src={photo.img_src} alt={photo.img_src} />
      <p>{photo.earth_date}</p>
      <div>
        sol:
        {photo.sol}
      </div>
      <div>
        camera:
        {photo.camera.full_name}
      </div>

      {!inFavorite ? (
        <ButtonAddFavorite photo={photo} />
      ) : (
        <ButtonDeleteFavorite photo={photo} />
      )}
    </div>
  );

  return content;
});

export default RoverImage;
