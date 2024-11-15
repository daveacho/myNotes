import { Link } from "react-router-dom";

export default function Note({ note }) {
    // const formattedDate = new Date(note.created).toLocaleDateString()
    // Get the current date instead of the fetched date
    const currentDate = new Date().toLocaleDateString();
    return (
        <>
            <Link to={`/notes/${note.slug}`}> {/* Use note.slug directly */}
                <div className="notes">
                    <p className="mb-2 uppercase text-green-300">{note.title}</p>
                    <p className="mb-2">{currentDate}</p>
                    <p className="mb-2">{note.body}</p>
                    <p>{note.category}</p>
                </div>
            </Link>
        </>
    );
}



// import { Link, useParams } from "react-router-dom";

// export default function Note ({note}) {
//     const {slug} = useParams()
//     return <div>
//               <Link to={`${slug}`}>
//                 <div>
//                     <p>{note.title}</p>
//                     <p>{note.created}</p>
//                     <p>{note.body}</p>
//                     <p>{note.category}</p>
//                 </div>
//               </Link>
//            </div>
// }