import { PhotoModel } from '../../../../models';

interface RoverImageProps {
  photo: PhotoModel;
}

function RoverImage({ photo }: RoverImageProps) {
  return (
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
}

export default RoverImage;
