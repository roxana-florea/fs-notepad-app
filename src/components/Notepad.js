import React from 'react';
import { Input, Textarea, Stack, Button } from '@chakra-ui/react';

const Notepad = ({
  send,
  update,
  cancel,
  updateStatus,
  getTitle,
  getText,
  title,
  text,
}) => {
  return (
    <form>
      <Stack
        direction={['column']}
        spacing="24px"
        align="center"
        paddingTop="50"
      >
        <Input
          type="text"
          focusBorderColor="teal.400"
          required
          variant="outline"
          value={title}
          onChange={getTitle}
          placeholder="Title..."
          maxWidth="800"
        />
        <Textarea
          rows="10"
          cols="50"
          focusBorderColor="teal.400"
          placeholder="Write your notes here..."
          value={text}
          required
          onChange={getText}
          maxWidth="800"
        ></Textarea>
        <Button colorScheme="teal" onClick={updateStatus ? update : send}>
          {updateStatus ? 'Update' : 'Submit'}
        </Button>
        {updateStatus && <Button onClick={cancel}>Cancel</Button>}
      </Stack>
    </form>
  );
};

export default Notepad;
