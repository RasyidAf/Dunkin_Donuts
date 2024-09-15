import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BestSelling from "./components/Best_Selling";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <header className="flex w-full justify-center items-center fixed top-0 bg-white z-10">
        <Navbar />
      </header>

      <main className="px-8">
        <Home />
        <BestSelling />
        <About />
        <Gallery />
      </main>

      <footer id="contact" className="bg-gray-300 py-8">
        <Contact />
      </footer>
    </>
  );
}

export default App;
