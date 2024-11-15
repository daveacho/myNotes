import { useEffect, useState } from "react"
import Note from "./Note"

export default function NoteContainer ({filteredNotes}) {

    return <div className = "notecontainer">
              {filteredNotes.map((note, i) => (<Note note={note} key={i} />))}
           </div>
  }
  

// import { useEffect, useState } from "react";
// import Note from "./Note";

// // const API_URL = "http://127.0.0.1:8000";

// export default function NoteContainer({ filternote, notesearch }) {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     // Only set the notes if the notessearch prop changes
//     if (notesearch) {
//       setNotes(notesearch);
//     }
//   }, [notesearch]);

//   // Apply filter based on the `filternote` prop
//   const filteredNotes =
//     filternote === "BUSINESS"
//       ? notes.filter((note) => note.category === "BUSINESS")
//       : filternote === "PERSONAL"
//       ? notes.filter((note) => note.category === "PERSONAL")
//       : filternote === "IMPORTANT"
//       ? notes.filter((note) => note.category === "IMPORTANT")
//       : notes; // Default to all notes if no filter is applied

//   return (
//     <div className="accord">
//       {filteredNotes.length > 0 ? (
//         filteredNotes.map((note, i) => <Note note={note} key={i} />)
//       ) : (
//         <p>No notes found</p>
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from "react"
// import Note from "./Note"

// const API_URL = "http://127.0.0.1:8000"
// export default function NoteContainer ({filternote, notesearch}) {
//     const [notes, setNotes] = useState([])

//     // Fetch notes on component mount
//     useEffect(() => {
//         const get_notes = async () => {
//         try {
//             const response = await fetch(`${API_URL}/notes/`);
//             const data = await response.json();
//             console.log(data);
//             setNotes(data);
//         } catch (error) {
//             console.error("Error fetching notes:", error);
//         }
//         };
//         get_notes();
//     }, []);

//     const filteredNotes = filternote === "BUSINESS" ? notes.filter((note) => (note.category === "BUSINESS"))
//     : filternote === "PERSONAL" ? notes.filter((note)=>(note.category === "PERSONAL"))
//     : filternote === "IMPORTANT" ? notes.filter((note) =>(note.category === "IMPORTANT")) : notes

//     return <div className = "accord">
//               {filteredNotes.map((note, i) => (<Note note={note} key={i} />))}
//            </div>
//   }
  


// import { useEffect, useState } from "react";
// import Note from "./Note";
// import { getNotes } from "../services/api";

// export default function NoteContainer() {
//     const [notes, setNotes] = useState([]); // Initialize as an empty array
//     const [loading, setLoading] = useState(true); // Track loading state
//     const [error, setError] = useState(null); // Track error state

//     useEffect(() => {
//         async function fetchNotes() {
//             try {
//                 const fetchedNotes = await getNotes();
//                 setNotes(fetchedNotes || []); // Set notes or default to an empty array
//             } catch (error) {
//                 console.error("Failed to fetch notes:", error);
//                 setError("Failed to fetch notes"); // Set error state
//             } finally {
//                 setLoading(false); // Stop loading when done or errored
//             }
//         }

//         fetchNotes();
//     }, []);

//     if (loading) return <p>Loading notes...</p>; // Show loading message
//     if (error) return <p>{error}</p>; // Show error message if there's an issue

//     return (
//         <div>
//             {notes.length > 0 ? (
//                 notes.map((note) => (
//                     <Note key={note.slug} note={note} />
//                 ))
//             ) : (
//                 <p>No notes available.</p> // Display message if notes are empty
//             )}
//         </div>
//     );
// }

// useEffect(()=>{get_notes()}, [])

//       let get_notes = async () => {
//           let response = await fetch(`${API_URL}/notes/`)
//           let data = await response.json()
//           console.log(data)
//           setNotes(data)
//       }