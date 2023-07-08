import { getByText, render } from '@testing-library/react';
import { SelectCamera } from '.';
import { cameras } from '../../constants';

describe('Select Camera', () => {
  it('test_renders_without_crashing', () => {
    render(<SelectCamera />);
  });
  it('test_displays_heading', () => {
    const { getByText } = render(<SelectCamera />);
    expect(getByText(/Select camera/i)).toBeDefined();
  });
  it('test_displays_dropdown_with_options', () => {
    const { getByRole } = render(<SelectCamera />);
    const dropdown = getByRole('combobox');
    expect(dropdown).toBeDefined();
    cameras.forEach((camera) => {
      expect(getByText(dropdown, camera)).toBeDefined();
    });
  });
});
