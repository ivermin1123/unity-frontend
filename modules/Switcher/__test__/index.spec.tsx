import { act, render } from '@shared/utils/test/test-ultis';
import Switcher from '../index';

describe('Switcher', () => {
  it('should render correctly', async () => {
    await act(async () => {
      await new Promise(resolve => {
        setTimeout(resolve, 50);
      });
    });
    const { container } = render(<Switcher />);

    expect(container).toMatchSnapshot();
  });
});
