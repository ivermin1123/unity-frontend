import { styled } from '@nextui-org/react';
import { motion } from 'framer-motion';

export const SideBar = styled(motion.div, {
  color: 'white',
  height: '100vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
});
