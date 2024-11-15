import { useEffect, useState } from "react";
import Footer from "../UI/Footer";
import AppHeader from "../UI/Header";
import NoteContainer from "../components/NoteContainer";
import Filter from "../components/filter";

const API_URL = "http://13.40.19.69:8000";

export default function AppLayout () {

 const [filterNotes, setFilterNotes] = useState("")
 const [searchNotes, setSearchNotes] = useState("")
 const [notes, setNotes] = useState([])

 // Handle filter value updates
 function handleFilter(val) {
  setFilterNotes(val)
 }

 // Handle search value updates
 function handleSearch (val) {
  setSearchNotes(val)
 }
 
 // Function to fetch notes based on search query
 async function searchNote() {
  try {
    const response = await fetch(`/notes-search/?search=${searchNotes}`);
    if (!response.ok) throw new Error("Failed to fetch notes");
    const data = await response.json();
    setNotes(data);
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
}

// Fetch notes on searchNotes change
useEffect(() => {
  if (searchNotes) searchNote();
}, [searchNotes]);

// Fetch notes on component mount
useEffect(() => {
  const get_notes = async () => {
  try {
      const response = await fetch(`/notes/`);
      const data = await response.json();
      setNotes(data);
  } catch (error) {
      console.error("Error fetching notes:", error);
  }
  };
  get_notes();
}, []);

const filteredNotes = filterNotes === "BUSINESS" ? notes.filter((note) => (note.category === "BUSINESS"))
: filterNotes === "PERSONAL" ? notes.filter((note)=>(note.category === "PERSONAL"))
: filterNotes === "IMPORTANT" ? notes.filter((note) =>(note.category === "IMPORTANT")) : notes

  return <div className="applayout">
            <AppHeader handlesearch = {handleSearch} searchValue={searchNotes} />
            {notes.length < 1 ? <div className="flex items-center justify-center h-screen"> <h3 className="text-white">No Note found containing the word "{searchNotes}"</h3> </div> :
            <Filter handlefilter = {handleFilter} /> }
            <NoteContainer filteredNotes = {filteredNotes} />
            <Footer />
         </div>
}


// export default function AppLayout () {
//     const id = [1,2,3]
//     return <div className="applayout">
//               <AppHeader />
//               <h1>Welcome to the AppLayout Page</h1>
//               <NoteContainer />
//                 <Link to={`${id[0]}`}><div><p>NoteOne</p></div></Link>
//                 <Link to={`${id[1]}`}><div><p>NoteTwo</p></div></Link>
//                 <Link to={`${id[2]}`}><div><p>NoteThree</p></div></Link>
//               <Footer />
//            </div>
// }