/* eslint-disable react/prop-types */

const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const unCompletedNotes = notes.filter((note) => !note.completed).length;

  if (!allNotes) return <h2>There is no notes</h2>;

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        UnCompleted <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
};

export default NoteStatus;
