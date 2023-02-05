import React from 'react';
import { Button, Col, Row, Text, useTheme } from '@nextui-org/react';
import NewFeedIcon from '@/public/icons/new_feed.svg';

// TODO: remove this when we have api to get menus
const menus = [
  {
    path: '/',
    name: 'News Feeds',
    iconLeft: 'HomeIcon',
    iconRight: '',
  },
];

type NewFeedsProps = {
  isOpen?: boolean;
};

const NewFeeds = ({ isOpen }: NewFeedsProps) => {
  const { isDark } = useTheme();
  return (
    <Col>
      <Text
        size="$xs"
        css={{
          textAlign: isOpen ? 'start' : 'center',
        }}
      >
        {isOpen ? 'News Feeds' : 'Feeds'}
      </Text>
      {menus.map((menu, index) => {
        if (!isOpen)
          return (
            <Button
              color="secondary"
              key={index}
              auto
              icon={<NewFeedIcon />}
              css={{
                width: '56px',
                height: '56px',
              }}
            />
          );
        return (
          <Button color="secondary" key={index} auto icon={<NewFeedIcon />}>
            {menu.name}
          </Button>
        );
      })}
    </Col>
  );
};

export default NewFeeds;
