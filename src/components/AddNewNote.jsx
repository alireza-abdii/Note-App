/* eslint-disable react/prop-types */

import { useState } from "react";

const AddNewNote = ({ onAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!noteTitle || !noteDesc) return null;

    const newNote = {
      noteTitle,
      noteDesc,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAddNote(newNote);

    setNoteTitle("");
    setNoteDesc("");
  };

  const handleTitleChange = (title) => {
    setNoteTitle(title.target.value);
  };
  const handleDescChange = (desc) => {
    setNoteDesc(desc.target.value);
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          placeholder="Note Title"
          value={noteTitle}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Note Description"
          value={noteDesc}
          onChange={handleDescChange}
        />
        <button type="submit" className="btn btn--primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;
