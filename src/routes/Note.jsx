import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useAuth0();

  const fetchNotes = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/gratitude?uniqueId=${user.email}
        `
      );
      if (response.ok) {
        const fetchedNotes = await response.json();
        console.log(fetchedNotes)
        setNotes(fetchedNotes);
      } else {
        throw new Error("Failed to fetch notes");
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          fetchNotes();
        }}
      >
        ffff
      </button>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Note;
