import PageNav from "../components/PageNav";
import Footer from "../UI/Footer";

export default function About () {
    return <main className="custom-bg-others">
              <PageNav />
              <section className="section">
                <div className="grid grid-cols-2 gap-4 lg:gap-4 md:gap-2 sm:gap-1">
                  <div className="sm:max-w-44 md:max-w-60 lg:max-w-96 rounded-md overflow-hidden"><img src="img1.png" /></div>
                  <p className="flex items-center justify-center text-white text-xl lg:text-3xl sm:text-xl md:text-2xl">Welcome to the About Page</p>
                </div>
              </section>
              <Footer />
           </main>
}