import { render } from '@testing-library/react';
import { SelectValueProvider } from './SelectContextProvider';

describe('SelectValueProvider', () => {
  it('test_renders_children', () => {
    const { getByText } = render(
      <SelectValueProvider>
        <div>Test</div>
      </SelectValueProvider>
    );
    expect(getByText('Test')).toBeDefined();
  });
  it('test_no_children_passed', () => {
    expect(() => {
      //@ts-ignore
      render(<SelectValueProvider />);
    }).toThrowError('No children passed');
  });
});
