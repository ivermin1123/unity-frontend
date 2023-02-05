import React, { useMemo } from 'react';
import { Button, Col, Row, Text, useTheme } from '@nextui-org/react';
import { useRouter } from 'next/router';

import NewFeedIcon from '@/public/icons/new_feed.svg';
import TrendingIcon from '@/public/icons/trending.svg';
import FollowingIcon from '@/public/icons/following.svg';
import YourVideosIcon from '@/public/icons/your_videos.svg';
import ArrowPlus from '@/public/icons/arrow_plus.svg';
import PlaylistIcon from '@/public/icons/playlist.svg';

// TODO: remove this when we have api to get menus
const menus = [
  {
    path: '/',
    name: 'News Feeds',
    icon: NewFeedIcon,
  },
  {
    path: '/trending',
    name: 'Trending',
    icon: TrendingIcon,
  },
  {
    path: '/following',
    name: 'Following',
    icon: FollowingIcon,
  },
  {
    path: '/your_videos',
    name: 'Your Videos',
    icon: YourVideosIcon,
  },
  {
    path: '/playlist',
    name: 'PlayList',
    icon: PlaylistIcon,
  },
];

type NewFeedsProps = {
  isOpen?: boolean;
};

const NewsFeed = ({ isOpen }: NewFeedsProps) => {
  const { isDark, theme } = useTheme();
  const router = useRouter();

  const activeMenu = useMemo(() => {
    return menus.find(menu => menu.path === router.pathname);
  }, [router.pathname]);

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
      {menus.map(menu => {
        if (!isOpen)
          return (
            <Button
              auto
              light={activeMenu?.path !== menu.path}
              key={menu.name}
              color="secondary"
              icon={<menu.icon />}
              css={{
                width: '56px',
                height: '56px',
              }}
            />
          );
        return (
          <Button
            key={menu.name}
            css={{
              width: theme?.space[52],
              justifyContent: 'start',
              color: activeMenu?.path === menu.path ? '$white' : '$text',
              background:
                activeMenu?.path === menu.path
                  ? theme?.colors.secondary.value
                  : 'transparent',
            }}
            style={{}}
            auto
            light={activeMenu?.path !== menu.path}
            color="secondary"
            icon={<menu.icon />}
            onClick={() => router.push(menu.path)}
          >
            {menu.name}
          </Button>
        );
      })}
    </Col>
  );
};

export default NewsFeed;
