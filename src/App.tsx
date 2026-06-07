import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MiddleSections from "./components/MiddleSections";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden antialiased font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MiddleSections />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

