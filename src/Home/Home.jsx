import React from "react";
import rotha from "../assets/Sovanrotha.jpg";

function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-amber-50 px-6 py-24 dark:bg-stone-950">
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-amber-200/50 blur-[90px] dark:bg-amber-900/20" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-300/40 blur-[90px] dark:bg-amber-800/20" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
            Full-Stack Developer
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight text-stone-900 dark:text-stone-50 sm:text-5xl lg:text-6xl">
            I build modern,
            <span className="block text-amber-600 dark:text-amber-400">polished web experiences</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            I create thoughtful interfaces and reliable web applications with a strong focus on user experience, clean design, and smooth performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-amber-500 px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-100 dark:border-amber-500 dark:text-amber-400 dark:hover:bg-amber-900/30"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative w-72 rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-2xl backdrop-blur dark:border-stone-800 dark:bg-stone-900/70 sm:w-80">
            <img
              src={rotha}
              alt="Profile"
              className="h-80 w-full rounded-[1.5rem] object-cover object-center sm:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;