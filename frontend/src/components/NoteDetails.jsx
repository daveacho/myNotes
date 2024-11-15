import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  Description,Dialog, DialogPanel, DialogTitle } from "@headlessui/react"; // Import Dialog component from Headless UI

const API_URL = "http://13.40.19.69:8000/notes";

export default function NoteDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [singleNote, setSingleNote] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    useEffect(() => {
        const getSingleNote = async () => {
            try {
                const res = await fetch(`${API_URL}/${slug}`);
                if (!res.ok) throw new Error("Failed to fetch the note.");
                const data = await res.json();
                setSingleNote(data);
            } catch (error) {
                console.error("Error fetching note:", error);
            }
        };
        getSingleNote();
    }, [slug]);

    async function deleteNote() {
        try {
            const res = await fetch(`${API_URL}/${slug}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) throw new Error("Failed deleting note");

            console.log("Note deleted successfully");
            setIsModalOpen(false); // Close modal after deletion
            navigate("/notes"); // Redirect to notes page after successful deletion
        } catch (error) {
            console.error("Error deleting note:", error);
            throw error;
        }
    }

    function handleDelete() {
        setIsModalOpen(true); // Open modal on delete button click
    }

    return (
        <div className="notedetailscontainer">
            {singleNote ? (
            <div className="max-w-lg text-white bg-neutral-700 p-28 sm:px-24 md:p-12">    
                <div>
                    <button className="mb-10">
                      <Link to="/notes">&larr; back to notes</Link>
                    </button>
                    <h2 className="mb-4 uppercase text-green-300">{singleNote.title}</h2>
                    <p>{singleNote.body}</p>
                    <div className="flex items-center justify-between mt-8">
                        <button className="uppercase">
                            <Link to={`/notes/${slug}/edit`}>Edit</Link>
                        </button>
                        <button className="uppercase" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>    
            ) : (
                <p>Loading...</p>
            )}

            {/* Modal for delete confirmation */}
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4">
                  <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                    <div className="bg-white rounded max-w-sm mx-auto p-6">
                        <DialogTitle className="text-lg font-medium">Confirm Deletion</DialogTitle>
                        <Description className="mt-2">
                           Are you sure you want to delete this note? This action cannot be undone.
                        </Description>
                        <div className="mt-4 flex justify-end space-x-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={deleteNote}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                  </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
}


// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const API_URL = "http://127.0.0.1:8000/notes";

// export default function NoteDetails() {
//     const { slug } = useParams();
//     const navigate = useNavigate();
//     const [singleNote, setSingleNote] = useState(null);

//     // Fetch the single note when the component mounts or when `slug` changes
//     useEffect(() => {
//         const getSingleNote = async () => {
//             try {
//                 const res = await fetch(`${API_URL}/${slug}`);
//                 if (!res.ok) throw new Error("Failed to fetch the note.");
//                 const data = await res.json();
//                 setSingleNote(data);
//             } catch (error) {
//                 console.error("Error fetching note:", error);
//             }
//         };
//         getSingleNote();
//     }, [slug]);

//     async function deleteNote() {
//         try {
//             const res = await fetch(`${API_URL}/${slug}`, {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });

//             if (!res.ok) throw new Error("Failed deleting note");
            
//             console.log("Note deleted successfully");
//             navigate("/notes"); // Redirect after successful deletion
            
//         } catch (error) {
//             console.error("Error deleting note:", error);
//             throw error;
//         }
//     }

//     function handleDelete() {
//         if (window.confirm("Are you sure you want to delete this note?")) {
//             deleteNote();
//         }
//     }

//     return (
//         <div>
//             {singleNote ? (
//                 <div>
//                     <h2>{singleNote.title}</h2>
//                     <p>{singleNote.body}</p>
//                     <button>
//                         <Link to={`/notes/${slug}/edit`}>Edit</Link>
//                     </button>
//                     <button onClick={handleDelete}>Delete</button>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//             <button className="btnn">
//                 <Link to="/notes">&larr; Back</Link>
//             </button>
//         </div>
//     );
// }
