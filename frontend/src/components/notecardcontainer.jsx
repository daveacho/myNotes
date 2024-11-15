import { useLoaderData, useNavigate } from "react-router-dom";
import Notecard from "./notecard";

export default function Notecardcontainer() {
    const notes = useLoaderData();
    const navigate = useNavigate();  // Call useNavigate as a function
    console.log(notes);

    return (
        <div>
            {notes.map((note) => (
                <Notecard
                    key={note.slug}
                    note={note}
                    onClick={() => navigate(`/notes/${note.slug}`)}
                    style={{ cursor: "pointer", margin: "10px 0" }}
                />
            ))}
        </div>
    );
}



// import { useLoaderData, useNavigate } from "react-router-dom";
// import Notecard from "./notecard";

// export default function Notecardcontainer () {
//     const notes = useLoaderData()
//     const navigate = useNavigate;
//     console.log(notes)
//     return <div>
//                {notes.map((note,i) => (
//                 <Notecard key={i} note = {note} />
//                ))}
//            </div>
// }


// the fetch data from an api using the loader function is done in three steps
// 1. create a loader with the logic to fetch the data
// 2. add the loader function to your route
// 3. provide the data to a page
// 4. the convention is to call the function loader