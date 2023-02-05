import { Container, Text, Row, Card, Spacer, Image, Avatar, Col } from '@nextui-org/react'
import React from 'react'

const NewsFeed = () => {
  return (
    <Container
      fluid
      css={{
        padding: '4rem',
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
              src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
              alt="Default Image"
              objectFit="cover"
            />
          </Card.Header>
          <Card.Body css={{ padding: '1.5rem' }}>
            <Text color='white' size={'$lg'} weight={'medium'}>
              2020 World Champs Gaming Warzone
            </Text>
            <Row css={{ marginTop: '1rem', backgroundColor: '#fff', padding: 0 }} align='center'>
              <Avatar
                rounded
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Col css={{ background: 'red' }}>
                <Text size={'$xs'}>Fi Nguyen</Text>

                <Text>Call of Duty</Text>
              </Col>
            </Row>

          </Card.Body>
          <Card.Footer css={{ padding: '1.5rem' }}>
            <Text>footer</Text>
          </Card.Footer>
        </Card>

        <Spacer x={0.5} />
        <Card >
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>
        <Spacer x={0.5} />
        <Card>
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>
        <Spacer x={0.5} />
        <Card >
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>

      </Row>

    </Container>
  )
}

export default NewsFeed