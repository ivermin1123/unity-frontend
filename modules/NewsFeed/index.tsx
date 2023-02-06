import {
  Avatar,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'

import WatchingDot from '@public/icons/dot.svg'
import Live from '@public/icons/live.svg'
import Tick from '@public/icons/tick.svg'

const NewsFeed = () => {
  return (
    <Container
      fluid
      css={{
        p: '4rem',
      }}
    >
      <Row fluid justify='space-between'>
        <Text size="$2xl">Live channels</Text>
        <Text>dropdown</Text>
      </Row>
      <Spacer y={1.5} />
      <Row fluid>
        <Card css={{ minHeight: 390 }}>
          <Card.Header css={{ padding: 0 }}>
            <Image
              width="100%"
              height={170}
              src="/images/card_ex.png"
              alt="Default Image"
              objectFit="cover"
            />
          </Card.Header>
          <Card.Body css={{ padding: '1.5rem' }}>
            <Text color='white' size='$lg' weight='medium'>
              2020 World Champs Gaming Warzone
            </Text>
            <Row css={{ mt: '1rem' }} align='center'>
              <Avatar
                rounded
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Col css={{ ml: '0.5rem' }}>
                <Row align='center'>
                  <Text size='$xs' color='white' weight='semibold'>Fi Nguyen</Text>
                  <Spacer x={0.25} />
                  <Tick />
                </Row>
                <Text size='$xs' weight='semibold'>Call of Duty</Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Divider />
          <Card.Footer css={{ padding: '1.5rem' }}>
            <Row justify='space-between'>
              <Button
                color="warning"
                size="xs"
                css={{
                  span: {
                    gap: '$3'
                  }
                }}
              >
                <Live />
                Live
              </Button>

              <div>
                <Row align='center'>
                  <WatchingDot />
                  <Spacer x={0.5} />
                  <Text size='$sm'>4.2k watching</Text>
                </Row>
              </div>
            </Row>
          </Card.Footer>
        </Card>

        <Spacer x={1} />

        <Card css={{ minHeight: 390 }}>
          <Card.Header css={{ padding: 0 }}>
            <Image
              width="100%"
              height={170}
              src="/images/card_ex.png"
              alt="Default Image"
              objectFit="cover"
            />
          </Card.Header>
          <Card.Body css={{ padding: '1.5rem' }}>
            <Text color='white' size='$lg' weight='medium'>
              2020 World Champs Gaming Warzone
            </Text>
            <Row css={{ mt: '1rem' }} align='center'>
              <Avatar
                rounded
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Col css={{ ml: '0.5rem' }}>
                <Row align='center'>
                  <Text size='$xs' color='white' weight='semibold'>Fi Nguyen</Text>
                  <Spacer x={0.25} />
                  <Tick />
                </Row>
                <Text size='$xs' weight='semibold'>Call of Duty</Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Divider />
          <Card.Footer css={{ padding: '1.5rem' }}>
            <Row justify='space-between'>
              <Button
                color="warning"
                size="xs"
                css={{
                  span: {
                    gap: '$3'
                  }
                }}
              >
                <Live />
                Live
              </Button>

              <div>
                <Row align='center'>
                  <WatchingDot />
                  <Spacer x={0.5} />
                  <Text size='$sm'>4.2k watching</Text>
                </Row>
              </div>
            </Row>
          </Card.Footer>
        </Card>

        <Spacer x={1} />

        <Card css={{ minHeight: 390 }}>
          <Card.Header css={{ padding: 0 }}>
            <Image
              width="100%"
              height={170}
              src="/images/card_ex.png"
              alt="Default Image"
              objectFit="cover"
            />
          </Card.Header>
          <Card.Body css={{ padding: '1.5rem' }}>
            <Text color='white' size='$lg' weight='medium'>
              2020 World Champs Gaming Warzone
            </Text>
            <Row css={{ mt: '1rem' }} align='center'>
              <Avatar
                rounded
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Col css={{ ml: '0.5rem' }}>
                <Row align='center'>
                  <Text size='$xs' color='white' weight='semibold'>Fi Nguyen</Text>
                  <Spacer x={0.25} />
                  <Tick />
                </Row>
                <Text size='$xs' weight='semibold'>Call of Duty</Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Divider />
          <Card.Footer css={{ padding: '1.5rem' }}>
            <Row justify='space-between'>
              <Button
                color="warning"
                size="xs"
                css={{
                  span: {
                    gap: '$3'
                  }
                }}
              >
                <Live />
                Live
              </Button>

              <div>
                <Row align='center'>
                  <WatchingDot />
                  <Spacer x={0.5} />
                  <Text size='$sm'>4.2k watching</Text>
                </Row>
              </div>
            </Row>
          </Card.Footer>
        </Card>

        <Spacer x={1} />

        <Card css={{ minHeight: 390 }}>
          <Card.Header css={{ padding: 0 }}>
            <Image
              width="100%"
              height={170}
              src="/images/card_ex.png"
              alt="Default Image"
              objectFit="cover"
            />
          </Card.Header>
          <Card.Body css={{ padding: '1.5rem' }}>
            <Text color='white' size='$lg' weight='medium'>
              2020 World Champs Gaming Warzone
            </Text>
            <Row css={{ mt: '1rem' }} align='center'>
              <Avatar
                rounded
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Col css={{ ml: '0.5rem' }}>
                <Row align='center'>
                  <Text size='$xs' color='white' weight='semibold'>Fi Nguyen</Text>
                  <Spacer x={0.25} />
                  <Tick />
                </Row>
                <Text size='$xs' weight='semibold'>Call of Duty</Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Divider />
          <Card.Footer css={{ padding: '1.5rem' }}>
            <Row justify='space-between'>
              <Button
                color="warning"
                size="xs"
                css={{
                  span: {
                    gap: '$3'
                  }
                }}
              >
                <Live />
                Live
              </Button>

              <div>
                <Row align='center'>
                  <WatchingDot />
                  <Spacer x={0.5} />
                  <Text size='$sm'>4.2k watching</Text>
                </Row>
              </div>
            </Row>
          </Card.Footer>
        </Card>

      </Row>

    </Container>
  )
}

export default NewsFeed