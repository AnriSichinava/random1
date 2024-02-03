
import './App.css';
import NoteForm from './NoteForm';
import React, { useState } from 'react';
import NoteList from './NoteList';
import SearchNote from './SearchNotes';


function App() {

const [notes, setNotes] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const handleSave =(newNote) =>{
  setNotes(prevNotes => [...prevNotes,newNote])
}
const handleDelete = (index) => {
  const updatedNotes = notes.filter((note, id) => id !== index);
  setNotes(updatedNotes);
  }
const handleSearch = (value) =>{
  setSearchTerm(value);
} 

 const filteredNotes = notes.filter((note) =>
   note.title.toLowerCase().includes(searchTerm.toLowerCase())
   );
   
  return (
    <div className="App">
       <SearchNote searchTerm={searchTerm} onSearchChange={handleSearch}/>
      <NoteForm onSave={handleSave}/>
      <NoteList notes={filteredNotes} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
