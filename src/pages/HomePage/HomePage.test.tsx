import { render } from '@testing-library/react';
import { HomePage } from '..';
describe('home page', () => {
  it('test_render_homepage', () => {
    render(<HomePage />);
  });
  it('test_render_features', () => {
    const { getAllByRole } = render(<HomePage />);
    const featureTitles = getAllByRole('heading', { level: 2 });
    expect(featureTitles.length).toBe(7);
  });
});
