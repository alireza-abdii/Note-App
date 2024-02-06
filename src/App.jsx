import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteLists from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

const noteReducer = (notes, { type, payload }) => {
  switch (type) {
    case "addNote": {
      return [...notes, payload];
    }
    case "deleteNote": {
      return notes.filter((note) => note.id !== payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:
      throw new Error("Unknown Error" + type);
  }
};

const App = () => {
  const [notes, dispatch] = useReducer(noteReducer, []);

  const [sortBy, setSortBy] = useState("latest");

  const handleAddNotes = (newNote) => {
    dispatch({ type: "addNote", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    dispatch({ type: "deleteNote", payload: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);

    dispatch({ type: "complete", payload: noteId });
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
