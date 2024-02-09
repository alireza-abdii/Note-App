import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteLists from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

const App = () => {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader
          sortBy={sortBy}
          onSort={(e) => {
            setSortBy(e.target.value);
          }}
        />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteLists sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
};

export default App;
