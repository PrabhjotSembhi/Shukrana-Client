import React, { useEffect, useState } from 'react';

function GratitudeNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/gratitude-notes');
        console.log('this' )

        if (response.ok) {
            console.log('this' )
          const data = await response.json();
          setNotes(data);
          console.log('this' )

        } else {
            console.log('this' )

          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Gratitude Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.note}</p>
            <p>Category: {note.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GratitudeNotes;
