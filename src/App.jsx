import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteLists from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter((note) => note.id !== id);
    // setNotes(filteredNotes);

    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => {
          setSortBy(e.target.value);
        }}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteLists
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
