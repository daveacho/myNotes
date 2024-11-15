import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNote from "./pages/addnotes";
import NotePage from "./pages/notepage";
import Home from "./pages/home";
import Applayout from "./pages/applayout";
import Error404 from "./components/error";

// Define routes
const router = createBrowserRouter([  
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/notes",
    element: <Applayout />,
    loader: async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/notes/");
        if (!res.ok) throw new Error("Failed to fetch notes");
        const data = await res.json();
        console.log("Data fetched successfully:", data);
        return data;
      } catch (error) {
        console.error(error);
        throw error; // Throw error to be caught by any error elements (optional)
      }
    },
  },
  {
    path: "/notes/:slug",
    element: <NotePage />,
    loader: async ({ params }) => {
      const { slug } = params;
      try {
        const res = await fetch(`http://127.0.0.1:8000/notes/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch note details");
        const data = await res.json();
        console.log("Data fetched successfully:", data);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  {
    path: "/add-notes",
    element: <AddNote />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}


// import { createBrowserRouter, RouterProvider, } from "react-router-dom"
// import AddNote from "./pages/addnotes"
// import NotePage from "./pages/notepage"
// import Home from "./pages/home"
// import Applayout from "./pages/applayout"
// import Error404 from "./components/error"



// // Define routes
// const router = createBrowserRouter([  
//   {path: "/", element: <Home />},
//   {path: "/notes", element:  <Applayout />, loader:  async () => {
//     const res = await fetch(`http://127.0.0.1:8000/notes/`);
//     const data = res.json()
//     console.log("Data fetched successfully:", data); // Log fetched data
//     return data
//   },},
//   {path: "/notes/:noteid", element: <NotePage />},
//   {path: "/add-notes", element: <AddNote />}, 
//   { path: '*', element: <Error404 /> },
// ])

// export default function App () {
//   return <RouterProvider router={router} />
// }

//   { path: "/", element: <Home /> },
//   {
//     path: "/notes",
//     element: <Applayout />,
//     children: [
//       { path: "notes-detail", element: <NotePage /> },
//       { path: "add-notes", element: <AddNote /> },
//     ],
//   },
// ]);

