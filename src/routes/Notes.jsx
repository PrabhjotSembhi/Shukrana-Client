import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./notes.css";

const Notes = () => {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uniqueId = user.email; // Replace with the actual userid

      const response = await fetch("http://localhost:4000/api/gratitude", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          uniqueId,
        }),
      });

      if (response.ok) {
        const createdNote = await response.json();
        console.log("Note created:", createdNote);
        // Optionally, you can redirect or perform additional actions upon successful note creation
      } else {
        throw new Error("Failed to create note");
      }
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return true ? (
    <>
      <section className="dual-radial-gradient">
        <div className="wrapper">
          <h2>Lorem ipsum dolor sits.</h2>
          <span className="subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </span>

          <div className="formContainer">


          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              type="text"
              id="content"
              placeholder="I am thankful for .."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <button className="formBtn" type="submit">Submit</button>
          </form>

          </div>


        </div>
      </section>
    </>
  ) : (
    navigate("/")
  );
};

export default Notes;
