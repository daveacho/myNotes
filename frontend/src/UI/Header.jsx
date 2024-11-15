import { Link } from "react-router-dom";
import Logo from "../components/Logo";



export default function AppHeader ({handlesearch, searchValue}) {
    
    return <nav className="appheader-nav">
              <Logo />
              <form>
                <input type="text" value={searchValue} onChange={(e) =>handlesearch(e.target.value)} placeholder="Seach..."
                className="max-w-80 h-9 rounded-md focus:outline-none" />
              </form>
              <button><Link to={"/add-note"} className="text-stone-800 bg-green-300 p-2 rounded-md">ADD NOTES</Link></button>
           </nav>
}