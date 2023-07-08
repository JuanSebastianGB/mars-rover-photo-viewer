import { forwardRef } from 'react';
import { PhotoModel } from '../../../../models';

interface RoverImageProps {
  photo: PhotoModel;
}

const RoverImage: React.FC<RoverImageProps> = forwardRef(({ photo }, ref) => {
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
    </div>
  );

  return content;
});

export default RoverImage;
