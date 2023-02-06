import { CSS, Row, Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

type SwitcherProps = {
  style?: CSS;
};

const Switcher = ({ style }: SwitcherProps) => {
  const { setTheme } = useNextTheme();
  const { isDark, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Row
      css={{
        alignSelf: 'flex-end',
        alignItems: 'center',
        gap: theme?.space[8],
        marginTop: 'auto',
        ...style,
      }}
    >
      <Switch
        data-testid="switcher"
        shadow
        checked={isDark}
        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOff={<BiSun fill="black" color="black" />}
        iconOn={<BiMoon />}
      />
    </Row>
  );
};

export default Switcher;
