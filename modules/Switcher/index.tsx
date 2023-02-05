import React, { useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { CSS, Row, Switch, useTheme } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';

import LightIcon from '@/public/icons/light.svg';
import DarkIcon from '@/public/icons/dark.svg';

type SwitcherProps = {
  style?: CSS;
  hideIcon?: boolean;
};

const Switcher = ({ style, hideIcon }: SwitcherProps) => {
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
      {!hideIcon && (
        <>
          <motion.div
            initial={{
              display: !isDark ? 'flex' : 'none',
            }}
            animate={{
              opacity: Number(!isDark),
              transitionEnd: { display: !isDark ? 'flex' : 'none' },
            }}
            exit={{ opacity: 0 }}
          >
            <LightIcon />
          </motion.div>

          <motion.div
            initial={{
              display: isDark ? 'flex' : 'none',
            }}
            animate={{
              opacity: Number(isDark),
              transitionEnd: { display: isDark ? 'flex' : 'none' },
            }}
            exit={{ opacity: 0 }}
          >
            <DarkIcon />
          </motion.div>
        </>
      )}

      <Switch
        checked={isDark}
        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </Row>
  );
};

export default Switcher;
