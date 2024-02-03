import React, { useState } from 'react';
import SaveButton from './SaveButton';

const NoteForm = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleContentChange = (e) => setContent(e.target.value)

    const handleSave = (e) => {
        e.preventDefault();
        onSave({ title, content })
        setContent('');
        setTitle('');
    }

    return (
        <div>
            <form >
                <div>
                    <label ></label>
                    <input type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    <label ></label>
                    <input type="text"
                        value={content}
                        onChange={handleContentChange}
                    />

                </div>
                <SaveButton onSave={handleSave} />
            </form>
        </div>
    );
}

export default NoteForm;

