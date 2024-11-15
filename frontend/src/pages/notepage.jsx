import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/modal";
import Header from "../UI-Layouts/header";

function NotePage() {
    const note = useLoaderData(); // Gets the data from the loader
    const { title, body, category, created, slug } = note; // Assuming you also have a slug for the note
    const navigate = useNavigate();

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [updatedNote, setUpdatedNote] = useState({ title, body, category });

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:8000/notes/${slug}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedNote),
            });

            if (response.ok) {
                // Optionally show a success message here
                setIsEditModalOpen(false);
                navigate('/notes'); // Redirect back to the notes list after editing
            } else {
                throw new Error("Failed to update note");
            }
        } catch (error) {
            console.error(error);
            // Handle error (show notification, etc.)
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/notes/${slug}/`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setIsDeleteModalOpen(false);
                navigate('/notes'); // Redirect back to the notes list after deletion
            } else {
                throw new Error("Failed to delete note");
            }
        } catch (error) {
            console.error(error);
            // Handle error (show notification, etc.)
        }
    };

    return (
        <>
            <Header />
            <div className="flex grow flex-col pt-0.5">
                <p className="font-medium">{title}</p>
                <p>{created}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {body}
                </p>
                <p>{category}</p>
                <button onClick={() => setIsEditModalOpen(true)}>Edit</button>
                <button onClick={() => setIsDeleteModalOpen(true)}>Delete</button>
            </div>

            {/* Edit Modal */}
            {isEditModalOpen && (
                <Modal onClose={() => setIsEditModalOpen(false)}>
                    <form onSubmit={handleEditSubmit}>
                        <h2>Edit Note</h2>
                        <input
                            type="text"
                            value={updatedNote.title}
                            onChange={(e) => setUpdatedNote({ ...updatedNote, title: e.target.value })}
                            placeholder="Title"
                            required
                        />
                        <textarea
                            value={updatedNote.body}
                            onChange={(e) => setUpdatedNote({ ...updatedNote, body: e.target.value })}
                            placeholder="Body"
                            required
                        />
                        <select
                            value={updatedNote.category}
                            onChange={(e) => setUpdatedNote({ ...updatedNote, category: e.target.value })}
                        >
                            <option value="PERSONAL">Personal</option>
                            <option value="BUSINESS">Business</option>
                            <option value="IMPORTANT">Important</option>
                        </select>
                        <button type="submit">Save Changes</button>
                    </form>
                </Modal>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <Modal onClose={() => setIsDeleteModalOpen(false)}>
                    <h2>Are you sure you want to delete this note?</h2>
                    <button onClick={handleDelete}>Yes, Delete</button>
                    <button onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
                </Modal>
            )}
        </>
    );
}

export default NotePage;



// import { useLoaderData, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Modal from "../components/modal";
// import Header from "../UI-Layouts/header";

// function NotePage() {
//   const note = useLoaderData(); // Gets the data from the loader
//   const navigate = useNavigate();
//   const { title, body, category, created } = note;
  
//   const [isEdit, setIsEdit] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // Handlers for edit, delete, and modal confirmation
//   const handleEdit = async () => {
//     // Code to submit updated data to the backend (optional form setup for this step)
//     setIsEdit(false);
//     navigate("/notes"); // Redirect back to notes list after edit
//   };

//   const handleDelete = async () => {
//     await fetch(`http://127.0.0.1:8000/notes/${note.slug}`, {
//       method: "DELETE",
//     });
//     setShowModal(false);
//     navigate("/notes"); // Redirect back to notes list after delete
//   };

//   return (
//     <>
//       <Header />
//       <div className="flex grow flex-col pt-0.5">
//         <p className="font-medium">{title}</p>
//         <p>{created}</p>
//         <p className="text-sm capitalize italic text-stone-500">{body}</p>
//         <p>{category}</p>
        
//         {isEdit ? (
//           <>
//             <textarea defaultValue={body}></textarea>
//             <button onClick={handleEdit}>Save</button>
//             <button onClick={() => setIsEdit(false)}>Cancel</button>
//           </>
//         ) : (
//           <>
//             <button onClick={() => setIsEdit(true)}>Edit</button>
//             <button onClick={() => setShowModal(true)}>Delete</button>
//           </>
//         )}
//       </div>

//       {showModal && (
//         <Modal>
//           <p>Are you sure you want to delete this note?</p>
//           <button onClick={handleDelete}>Yes, Delete</button>
//           <button onClick={() => setShowModal(false)}>Cancel</button>
//         </Modal>
//       )}
//     </>
//   );
// }

// export default NotePage;


// // import { useLoaderData } from "react-router-dom";
// // import Modal from "../components/modal";
// // import Header from "../UI-Layouts/header";

// // function NotePage() {
// //   const note = useLoaderData(); // Gets the data from the loader
// //   const { title, body, category,created } = note;
// //   return (
// //     <>
// //       <Header />
// //       <div className="flex grow flex-col pt-0.5">
// //         <p className="font-medium">{title}</p>
// //         <p>{created}</p>
// //         <p className="text-sm capitalize italic text-stone-500">
// //           {body}
// //         </p>
// //         <p>{category}</p>
// //         <button>Edit</button>
// //         <button>Delete</button>
// //       </div>
// //       <Modal />
// //     </>
// //   );
// // }

// // export default NotePage;

