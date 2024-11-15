import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/notes";

export default function UpdateNote() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("BUSINESS");

  const { slug } = useParams();
  const navigate = useNavigate();

  // Fetch note details on component mount
  useEffect(() => {
    async function fetchNote() {
      try {
        const res = await fetch(`${API_URL}/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch note");
        
        const data = await res.json();
        
        // Set the initial state with fetched data
        setTitle(data.title);
        setBody(data.body);
        setCategory(data.category);
        
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    }

    fetchNote();
  }, [slug]); // Dependency on `slug` ensures it runs on mount and when `slug` changes

  async function updateNote(updatedNote) {
    try {
      const res = await fetch(`${API_URL}/${slug}`, {
        method: "PUT",
        body: JSON.stringify(updatedNote),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed updating note");
      const data = await res.json();
      console.log("Note updated:", data);
      return data;
    } catch (error) {
      console.error("Error updating note:", error);
      throw error;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !body || !category) return;

    const updatedNote = { title, body, category };
    console.log("Submitting updated note:", updatedNote);

    try {
      await updateNote(updatedNote);
      navigate("/notes");
    } catch {
      alert("There was an error updating the note. Please try again.");
    }
  }

  return (
    <div className="notedetailscontainer">
      <div  className= "bg-neutral-700 p-12 max-w-xl">
        <button className="mb-8 text-green-300">
          <Link to="/notes">&larr; back to notes</Link>
        </button>
        <form onSubmit={handleSubmit} >
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
              onChange={(e) => setBody(e.target.value)}
              className="textarea"
            ></textarea>     
          </div>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-20 text-white">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="grow focus:outline-none rounded-md">
              <option value="BUSINESS">Business</option>
              <option value="PERSONAL">Personal</option>
              <option value="IMPORTANT">Important</option>
            </select>
          </div>
          <div><button type="submit" className="uppercase text-green-300">Update Note</button></div>
        </form>
        </div>
    </div>
  );
}

// className="bg-neutral-700 text-white p-12 max-w-xl"