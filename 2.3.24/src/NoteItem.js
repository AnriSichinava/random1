import DeleteButton from "./DeleteButton";
import React from 'react';


const NoteItem = ({title,content, onDelete}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <DeleteButton onDelete={onDelete}/>
        </div>
      );
}
 
export default NoteItem;