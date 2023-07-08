import { render } from '@testing-library/react';
import { FavoritesPage } from '.';
import { GridContainer, Title } from '../../../components';

describe('favorites page', () => {
  it('test_render_favorites_page', () => {
    render(<FavoritesPage />);
  });
  it('test_render_title', () => {
    // @ts-ignore
    render(<Title />);
  });
  it('test_render_grid_container', () => {
    // @ts-ignore
    render(<GridContainer />);
  });
  it('test_favorites_is_null_or_undefined', () => {
    const { getByText } = render(<FavoritesPage />);
    expect(getByText('Favorites')).toBeDefined();
  });
});
