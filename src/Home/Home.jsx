import React from "react";
import rotha from "../assets/Sovanrotha.jpg";

function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-16 overflow-hidden bg-stone-50 dark:bg-stone-950 transition-colors duration-500">
      {/* Background Ambient Lights */}
      <div className="pointer-events-none absolute top-1/4 right-10 h-96 w-96 rounded-full bg-amber-400/20 dark:bg-amber-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-amber-300/30 dark:bg-amber-900/10 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto grid items-center gap-12 md:grid-cols-2">
        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Full-Stack Developer
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 dark:text-stone-100 leading-[1.15] mb-6">
            I build modern,{" "}
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
              polished web experiences
            </span>
          </h1>

          <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
            Specializing in performant full-stack web applications, refined user interfaces, and intuitive digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={() => scrollTo("projects")}
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-[0.98]"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-stone-300 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 font-semibold text-sm backdrop-blur-md transition-all duration-200 active:scale-[0.98]"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />
            <div className="relative w-64 sm:w-80 rounded-2xl p-3 bg-white/80 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 backdrop-blur-xl shadow-xl">
              <img
                src={rotha}
                alt="Profile"
                className="w-full h-80 sm:h-96 rounded-xl object-cover object-center shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;