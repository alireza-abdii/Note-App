/* eslint-disable react/prop-types */

const NoteLists = ({ notes, onDelete, onComplete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => {
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onComplete={onComplete}
        />;
      })}
    </div>
  );
};

export default NoteLists;

const NoteItem = ({ note, onDelete, onComplete }) => {
  // const options = {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.noteTitle}</p>
          <p className="desc">{note.noteDesc}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={onComplete}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
};
