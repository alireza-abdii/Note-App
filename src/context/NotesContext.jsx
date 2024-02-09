/* eslint-disable react/prop-types */

import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

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

export const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(noteReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
export const useDispatchNotes = () => useContext(NotesDispatchContext);
