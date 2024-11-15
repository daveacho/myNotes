import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../UI/Footer";

export default function HomePage () {
    return <main className="homepage">
              <PageNav />
              <section className="section">
                <h1 className="text-slate-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Welcome to the Home Page!!</h1>
                <NavLink to={"/notes"} className="homepage-body-link text-xl sm:text-xl md:text-2xl lg:text-3xl">Start Making Notes</NavLink>
              </section>
              <Footer/>
           </main>
}