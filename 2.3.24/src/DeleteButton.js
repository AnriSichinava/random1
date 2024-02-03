import React from 'react';

const DeleteButton = ({onDelete}) => {
    return ( 
        <>
            <button onClick={onDelete}>X</button>
        </>
     );
}
 
export default DeleteButton;