import { Button, Col, Spacer, Text, useTheme } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import FollowingIcon from '@public/icons/following.svg';
import NewFeedIcon from '@public/icons/new_feed.svg';
import PlaylistIcon from '@public/icons/playlist.svg';
import TrendingIcon from '@public/icons/trending.svg';
import YourVideosIcon from '@public/icons/your_videos.svg';

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
      <Spacer y={0.5} />
      {menus.map(menu => {
        if (!isOpen)
          return (
            <Button
              auto
              light={activeMenu?.path !== menu.path}
              key={menu.name}
              color="secondary"
              icon={
                <menu.icon
                  style={{
                    stroke:
                      activeMenu?.path === menu.path
                        ? theme?.colors.white.value
                        : theme?.colors.text.value,
                  }}
                />
              }
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
              width: theme?.space.full,
              justifyContent: 'start',
              color: activeMenu?.path === menu.path ? '$white' : '$text',
              fontSize: '$sm',
              height: '$17',
            }}
            auto
            light={activeMenu?.path !== menu.path}
            color="secondary"
            icon={
              <menu.icon
                style={{
                  stroke:
                    activeMenu?.path === menu.path
                      ? theme?.colors.white.value
                      : theme?.colors.text.value,
                }}
              />
            }
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
