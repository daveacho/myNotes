import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Footer from "../UI/Footer";

export default function Login () {
    return <main className="custom-bg-others">
              <PageNav />
              <div className="flex items-center justify-center">
                <form className= "bg-neutral-700 p-12 max-w-xl rounded-md">
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-20 text-white">Email</label>
                    <input type="text" value="johnmoses@gmail.com" className="input" />
                  </div>
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-20 text-white">Password</label>
                    <input type="text" value="....................." className="input" />
                  </div>
                  <div><button className="text-stone-800 uppercase bg-green-300 p-2 rounded-md"><Link to={"/notes"}>LOGIN</Link></button></div>
                </form>
              </div>
              <Footer />
           </main>
}

//className="text-stone-800 uppercase bg-green-300 p-2 rounded-md"