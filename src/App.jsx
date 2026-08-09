import React from "react";
import Header from "./Header.jsx";
import Contact from "./Contact/Contact.jsx";
import Education from "./Education/Education.jsx";
import Home from "./Home/Home.jsx";
import Project from "./Project/Project.jsx";
import About from "./About/About.jsx";
import Award from "./Award/Award.jsx";


function App() {
  return (
    <div className="min-h-screen w-full bg-stone-50 text-stone-900 antialiased selection:bg-amber-500/30 selection:text-amber-600 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-500">
      <Header />
      <main className="pt-20">
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="education" className="scroll-mt-24">
          <Education />
        </section>
        <section id="awards" className="scroll-mt-24">
          <Award />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Project />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;