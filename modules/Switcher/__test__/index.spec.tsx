import { render } from '@shared/utils/test/test-ultis';
import Switcher from '../index';

describe('Switcher', () => {
  it('should render correctly', () => {
    const { container, getByTestId } = render(<Switcher />);

    const switcher = getByTestId('switcher');
    expect(switcher).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
