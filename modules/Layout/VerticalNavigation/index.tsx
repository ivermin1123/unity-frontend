import { Divider, Image, Row, Spacer, useTheme } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import Switcher from '@modules/Switcher';
import BurgerDarkIcon from '@public/icons/burger_dark.svg';
import BurgerLightIcon from '@public/icons/burger_light.svg';
import NewFeeds from './NewsFeed';
import { showAnimation } from './animations';
import { SideBar } from './styled';

const VerticalNavigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { theme, isDark } = useTheme();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <SideBar
      animate={{
        width: isOpen ? '288px' : '96px',
        transition: {
          duration: 0.5,
          type: 'spring',
          // damping: 10,
        },
      }}
      style={{
        padding: isOpen ? '2.5rem' : '1.25rem',
        overflow: 'hidden',
        boxShadow: `inset -1px 0px 0px ${theme?.colors.border}`,
      }}
    >
      <Row align="center" justify="center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Row>
                <Image
                  width={141}
                  src={
                    isDark
                      ? '/images/logo_gaming_dark.png'
                      : '/images/logo_gaming_light.png'
                  }
                  alt="logo"
                  objectFit="contain"
                  css={{
                    margin: 0,
                  }}
                />
              </Row>
            </motion.div>
          )}
          {isDark ? (
            <BurgerDarkIcon onClick={toggle} />
          ) : (
            <BurgerLightIcon onClick={toggle} />
          )}
        </AnimatePresence>
      </Row>
      <Spacer y={1.5} />
      <NewFeeds isOpen={isOpen} />
      <Spacer y={1.25} />
      <Divider />
      <Switcher
        style={{
          justifyContent: 'center',
        }}
      />
    </SideBar>
  );
};

export default VerticalNavigation;
