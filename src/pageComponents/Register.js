import React from 'react'
import {
  ActionButton,
  Button,
  ButtonGroup,
  Content,
  Header,
  Dialog,
  DialogTrigger,
  Divider,
  Heading,
  Text
} from '@adobe/react-spectrum'

const Register = () => {

  return (
    <DialogTrigger>
      <ActionButton>Check connectivity</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Internet Speed Test</Heading>
          <Header>Connection status: Connected</Header>
          <Divider />
          <Content>
            <Text>Start speed test?</Text>
          </Content>
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>
              Cancel
            </Button>
            <Button variant="cta" onPress={close}>
              Confirm
            </Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
  )
}

export default Register
