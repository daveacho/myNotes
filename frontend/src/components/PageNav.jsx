import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function PageNav () {
    return <nav className="pagenav">
              <Logo />
              <ul>
                <li><NavLink to="/about" className="uppercase text-white hover:text-green-300">About</NavLink></li>
                <li><NavLink to="/contact" className="uppercase text-white hover:text-green-300">Contact</NavLink></li>
                <li><NavLink to="/login" className="text-stone-800 uppercase bg-green-300 p-2 rounded-md hover:text-white">Login</NavLink></li>
              </ul>
           </nav>
}