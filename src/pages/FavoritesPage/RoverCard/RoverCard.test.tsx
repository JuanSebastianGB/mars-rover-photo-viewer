import { render, screen } from '@testing-library/react';
import { RoverCard } from '.';

describe('RoverCard', () => {
  const photo = {
    id: 1,
    img_src: 'https://images.nasa.gov/details-PIA17011.html',
    earth_date: '2021-08-24',
    rover: {
      name: 'Perseverance',
    },
    camera: {
      full_name: 'Mast Camera',
    },
  };
  it('test_photo_defined', () => {
    // @ts-ignore
    render(<RoverCard photo={photo} />);
    const roverCard = screen.getByRole('img');
    expect(roverCard).toBeDefined();
  });
  it('test_all_elements_rendered', () => {
    // @ts-ignore
    render(<RoverCard photo={photo} />);
    const roverCard = screen.getByRole('img');
    const title = screen.getByText('Perseverance');
    const subtitle1 = screen.getByText('2021-08-24');
    const subtitle2 = screen.getByText('Mast Camera');
    expect(roverCard).toBeDefined();
    expect(title).toBeDefined();
    expect(subtitle1).toBeDefined();
    expect(subtitle2).toBeDefined();
  });
  it('test_title_text', () => {
    // @ts-ignore
    render(<RoverCard photo={photo} />);
    const title = screen.getByText('Perseverance');
    expect(title).toBeDefined();
  });
  it('test_subtitle_text', () => {
    // @ts-ignore
    render(<RoverCard photo={photo} />);
    const subtitle1 = screen.getByText('2021-08-24');
    const subtitle2 = screen.getByText('Mast Camera');
    expect(subtitle1).toBeDefined();
    expect(subtitle2).toBeDefined();
  });
  it('test_button_delete_favorite_rendered', () => {
    // @ts-ignore
    render(
      <RoverCard
        photo={{
          id: 1,
          img_src: 'image.jpg',
          earth_date: '2022-01-01',
          // @ts-ignore
          camera: { full_name: 'Camera 1' },
          // @ts-ignore
          rover: { name: 'Rover 1' },
        }}
      />
    );
    const button = screen.getByText('DELETE FAVORITE');
    expect(button).toBeDefined();
  });
});
