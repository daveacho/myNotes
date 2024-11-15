import PageNav from "../components/PageNav";
import Footer from "../UI/Footer";

export default function Contact () {
    return <main className="custom-bg-others">
              <PageNav />
              <section className="section">
              <div className="grid grid-cols-2 gap-4 md:pr-16 sm:pr-16">
                  <p className="flex items-center justify-center sm:text-xl md:text-2xl text-white text-2xl">Welcome to the Contact Page</p>
                  <div className="max-w-96 rounded-lg overflow-hidden"><img src="img3.png"/></div>
                </div>
              </section>
              <Footer />
           </main>
}        