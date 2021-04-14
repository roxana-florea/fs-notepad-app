import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const List = ({ notes, del, edit }) => {
  return (

    <Box id='accordion' borderWidth="1px" borderRadius="lg" overflow="hidden" marginTop='50'>
      <Accordion  allowToggle={true} >
        {notes.map((note) => (
          <AccordionItem key={note._id}>
            <h4>
              <AccordionButton >
                <Box flex="1" textAlign="left">
                  {note.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h4>

            <AccordionPanel pb={4}>
              {note.text}
              <DeleteIcon className='icons' onClick={() => del(note._id)}>Del</DeleteIcon>
              <EditIcon className='icons' onClick={() => edit(note)} >Edit</EditIcon>
              
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
   
    </Box>
  
  );
};

export default List;
