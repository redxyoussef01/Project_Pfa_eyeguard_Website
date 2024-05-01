import {Button, Card, Flex, Typography } from 'antd'
import React from 'react'

const Banner = () => {
  return (
    <Card style={{height: 260, padding: '20px'}}>
      <Flex vertical gap='30px'>
        <Flex vertical align='flex-start'>
          <Typography.Title level={2} strong>Watch, All Security Cameras</Typography.Title>
          <Typography.Text type='secondary' strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, commodi?
          </Typography.Text>
        </Flex>

        <Flex gap="large">
          <Button type='primary' size="large">Choose</Button>
          <Button size='large'>Watch</Button>
        </Flex>
      </Flex>
    </Card>
  )
}

export default Banner