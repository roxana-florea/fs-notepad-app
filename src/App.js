import React, { useEffect, useState } from 'react';
import './App.css';
import Notepad from './components/Notepad';
import List from './components/List';
import axios from 'axios';


function App() {
  const [notes, getNotes] = useState([]);
  const [title, getTitle] = useState('');
  const [text, getText] = useState('');
  const [currentNoteId, setCurrentNoteId] = useState('');
  const [editStatus, setEditStatus] = useState(false);

  //get all notes from server
  const fetchData = async () => {
    const result = await axios('http://localhost:5000/notes/');
  
    getNotes(result.data);
  };

  //function to re-render state
  useEffect(() => {
    fetchData();

    const interval = setInterval(()=>{
      fetchData();
     },100)

     return()=>clearInterval(interval)

  },[]);



  //post the note
  const sendNote = () => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/notes',
      data: {
        title: title,
        text: text,
      },
    });
    getTitle('');
    getText('');
  };

  //delete the note
  const deleteNote = (noteId) => {
    axios({
      method: 'delete',
      url: `http://localhost:5000/notes/${noteId}`,
    });

  };

  //edit the note

  const editNote = (noteId) => {
    axios({
      method: 'put',
      url: `http://localhost:5000/notes/${noteId}`,
      data: {
        title: title,
        text: text,
      },
    });
   cancelEdit()
  };

  const updateNote = (note) => {
    getTitle(note.title);
    getText(note.text);
    setEditStatus(true);
    setCurrentNoteId(note._id);
  };

  const addTitle = (ev) => {
    getTitle(ev.target.value);
  };
  const addText = (ev) => {
    getText(ev.target.value);
  };

 

  //cancel edit
  const cancelEdit = () => {
    getTitle('');
    getText('');
    setEditStatus(false);
  };




  return (
    <div className="App">
      <Notepad
        title={title}
        text={text}
        getTitle={addTitle}
        getText={addText}
        send={sendNote}
        updateStatus={editStatus}
        update={() => editNote(currentNoteId)}
        cancel={cancelEdit}
      />
      <List notes={notes} del={deleteNote} edit={updateNote} />
    </div>
  );
}

export default App;
