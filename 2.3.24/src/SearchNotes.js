import React from 'react';

const SearchNote = ({ searchTerm, onSearchChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchNote;
