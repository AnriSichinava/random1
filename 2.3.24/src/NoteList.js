import NoteItem from "./NoteItem";
import React from 'react';


const NoteList = ({notes , onDelete}) => {
    return ( 
        <div>
            {notes.map((note,index) => (
                <NoteItem key={index} title={note.title} content={note.content} onDelete={() => onDelete(index) }/>
            ))}
        </div>
     );
}
 
export default NoteList;