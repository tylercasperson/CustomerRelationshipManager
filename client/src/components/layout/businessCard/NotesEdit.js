import React, { useContext, useEffect, useState } from 'react';
import NoteContext from '../../../context/note/noteContext';

const NotesEdit = (props) => {
  const noteContext = useContext(NoteContext);
  const { notes, getNotes, createNote, updateNote, deleteNote } = noteContext;

  const [note, setNote] = useState({
    id: '',
    businessId: props.businessMatch,
    note: '',
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setNote({ note: e.target.value, businessId: props.businessMatch });
    console.log(note);
  };

  const changeNote = (id, noteItem) => {
    console.log(noteItem);
    setNote({ id, note: noteItem });
    console.log(note);
  };

  const addNote = () => {
    console.log(note);
    createNote(note);
  };

  const saveNote = (e, id) => {
    setNote({ note: e.target.value, id });
    updateNote(note);
  };

  const removeNote = (id) => {
    deleteNote(id);
  };

  return (
    <div className='relative h-64 w-128 bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-yellow-300 h-full w-full px-2 py-2 shadow-xl'>
        {notes.length === undefined
          ? null
          : notes
              .filter(
                (businessNote) =>
                  businessNote.businessId === props.businessMatch
              )
              .map((businessNote) => (
                <div key={businessNote.id}>
                  {/* remove the below lines after crud is complete */}
                  {businessNote.id}
                  {'   '}
                  <input
                    type='text'
                    defaultValue={businessNote.note}
                    onChange={(e) =>
                      changeNote(businessNote.id, e.target.value)
                    }
                    className='bg-yellow-300 w-10/12'
                  />
                  <button
                    className='absolute right-0 px-3'
                    onClick={() => removeNote(businessNote.id)}
                  >
                    <i className='fas fa-trash-alt'></i>
                  </button>
                </div>
              ))}

        <input
          type='text'
          className='bg-yellow-200 w-full'
          placeholder='New notes go here'
          name='note'
          onChange={onChange}
        />
        <button onClick={addNote}>Save</button>

        <button
          className='bg-green-300 hover:bg-green-500 p-2 rounded-lg absolute bottom-0 right-0 m-4'
          onClick={saveNote}
        >
          <i className='fas fa-save'></i> Save
        </button>
      </div>
    </div>
  );
};

export default NotesEdit;
