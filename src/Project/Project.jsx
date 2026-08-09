import React from "react";
import CamFlex from "../assets/CamFlex.jpg";
import ClinicSystem from "../assets/ClinicSystem.jpg";
import PointOfSale from "../assets/POS_Restaurant.jpg";
import IMovie from "../assets/Movie.jpg";
import E_Learning from "../assets/Coding.jpg";

function Project() {
  const projects = [
    {
      id: 1,
      name: "E_learning Platform",
      description:
        "A web application that allows users to access online courses and learning materials.",
      image: E_Learning,
      url: "https://sovanrotha.github.io/Code-learning/",
    },
    {
      id: 2,
      name: "Clinic System",
      description:
        "A web application that allows users to manage patient records, appointments, and billing for a medical clinic.",
      image: ClinicSystem,
      url: "https://clinic-system-react-front-end.vercel.app/",
    },
    {
      id: 3,
      name: "Point of Sale System",
      description:
        "A web application that allows users to manage sales transactions, inventory, and customer data for a retail business.",
      image: PointOfSale,
      url: "https://point-of-sale-system-front-end.vercel.app/",
    },
    {
      id: 4,
      name: "IMovie",
      description: "A web application that allows users to browse and watch movies online.",
      image: IMovie,
      url: "https://preuniversity-gen05.github.io/imovie-platform/",
    },
    // {
    //   id: 5,
    //   name: "E-Learning Platform",
    //   description: "A web application that allows users to access online courses and learning materials.",
    //   image: E_Learning,
    //   url: "https://sovanrotha.github.io/my-app-e-learning-/",
    // },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .home-serif { font-family: 'Playfair Display', serif !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }

        .anim-fade-up-1 { animation: fadeUp .7s ease both; }
        .dot-pulse       { animation: pulse 1.8s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #d97706 0%, #fbbf24 40%, #d97706 60%, #92400e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 36px rgba(217,119,6,.16);
          border-color: rgba(217,119,6,.4);
        }
        .project-card:hover .project-img { transform: scale(1.06); }
        .project-img { transition: transform .5s ease; }

        .project-card:hover .visit-link { opacity: 1; transform: translateY(0); }
        .visit-link {
          opacity: 0;
          transform: translateY(4px);
          transition: opacity .25s ease, transform .25s ease;
        }
      `}</style>

      <section className="relative bg-amber-50 dark:bg-stone-950 min-h-screen px-6 pt-24 pb-24 transition-colors duration-500">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-amber-200/40 dark:bg-amber-900/20 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-0 -right-24 w-[320px] h-[320px] rounded-full bg-amber-300/25 dark:bg-amber-800/15 blur-[70px]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="anim-fade-up-1 text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dot-pulse" />
              {projects.length} Selected Projects
            </span>
            <h2 className="home-serif text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-50 mb-4">
              Things I've <span className="shimmer-text">built</span>
            </h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto">
              A mix of full-stack apps and front-end builds, deployed and live.
              Click through to try them.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${0.08 * i}s` }}
                className="project-card anim-fade-up-1 group block rounded-2xl overflow-hidden border border-amber-100 dark:border-stone-800 bg-white/80 dark:bg-stone-900/70 backdrop-blur shadow-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-img w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/0 to-stone-900/0" />
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-white/90 dark:bg-stone-800/90 backdrop-blur text-xs font-semibold text-stone-700 dark:text-stone-200 px-3 py-1 rounded-full shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
                    Live
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="home-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-1.5">
                    {project.name}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <span className="visit-link inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400">
                    Visit project
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Project;