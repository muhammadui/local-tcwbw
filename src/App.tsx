import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
};

export default App;
