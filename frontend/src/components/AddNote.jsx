import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://18.170.33.112:8000/notes/";

async function addNote(newNote) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error("Failed adding note");
    const data = await res.json();
    console.log("New note added:", data);
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export default function AddNotes() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("BUSINESS");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !body || !category) return;

    const newItem = { title, body, category };
    console.log("Submitting new note:", newItem);

    try {
      await addNote(newItem); // Wait for note to be added
      navigate(-1); // Go back to the previous page after successful submission
    } catch {
      alert("There was an error adding the note. Please try again.");
    }
  }

  return (
    <div className="addnotescontainer">
      <div className= "bg-neutral-700 p-12 max-w-xl">
        <button className="mb-8 text-green-300">
            <Link to="/notes">&larr; back to notes</Link>
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-20 text-white">Title</label>
            <input
              type="text"
              placeholder="Please enter a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
            />
          </div>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-20 text-white">Content</label>
            <textarea
              placeholder="Please enter note's content"
              value={body}
              onChange={(e) => setBody(e.target.value)} className="textarea"
            ></textarea>
          </div>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-20 text-white">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="grow rounded-md">
              <option value="BUSINESS">Business</option>
              <option value="PERSONAL">Personal</option>
              <option value="IMPORTANT">Important</option>
            </select>
          </div>
          <div><button type="submit" className="text-green-300 uppercase">Add Note</button></div>
        </form>
      </div>
    </div>
  );
}


{/* <button onClick={(e) => {e.preventDefault(); navigate(-1)}}>Add Note</button> */}

//when you click on the AddNote button, you are adding a new note to the notes in the notecontainer
//and in react, to add an element to an array, you use the spread operator.
//