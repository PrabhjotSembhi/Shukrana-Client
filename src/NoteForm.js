import React, { useState, useEffect } from 'react';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);



  
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/gratitude');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming you have userid from the authenticated user
      const userid = 'your_user_id'; // Replace with the actual userid

      const response = await fetch('http://localhost:4000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          userid,
        }),
      });

      if (response.ok) {
        const createdNote = await response.json();
        console.log('Note created:', createdNote);
        // Optionally, you can redirect or perform additional actions upon successful note creation
      } else {
        throw new Error('Failed to create note');
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NoteForm;
