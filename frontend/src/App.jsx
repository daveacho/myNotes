import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/Page Not Found';
import AddNotes from './components/AddNote';
import NoteDetails from './components/NoteDetails';
import UpdateNote from './components/EditNote';

export default function App () {
  return <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='about' element={<About/>} />
              <Route path='contact' element={<Contact/>} />
              <Route path='login' element={<Login />} />
              <Route path='notes' element={<AppLayout />} />
              <Route path='notes/:slug' element={<NoteDetails />} />
              <Route path='add-note' element={<AddNotes />} />
              <Route path='notes/:slug/edit' element={<UpdateNote />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
         </BrowserRouter>

}

//to use params with react router, we do it in three steps
//1. we create a route
//2. link to that route
//3.in that route we read the state from the url