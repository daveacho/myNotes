import { Link } from "react-router-dom";

export default function Header () {
    return <header>
              <Link to={"/"}>Homepage</Link>
              <Link to={"/notes"}>notey</Link>
              <input type="text" placeholder="Search notes..." />
              <button>Search</button>
              <button><Link to={"/add-notes"}>➕ Add Notes</Link></button>
           </header>
}


