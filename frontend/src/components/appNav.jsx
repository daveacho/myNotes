import { Link, NavLink } from "react-router-dom";

export default function AppNav () {
    return <nav>
             <ul className="app-nav-list">
               <li><Link to={"cities"}>cities</Link></li>
               <li><NavLink to={"countries"}>countries</NavLink></li>
             </ul>
           </nav>
}