import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteLists from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

const App = () => {
  const [notes, setNotes] = useState([]);

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
      <div className="note-header text-3xl pb-6 font-semibold">
        Note Application
      </div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteLists
            notes={notes}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
