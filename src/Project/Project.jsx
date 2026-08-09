import React from "react";
import ClinicSystem from "../assets/ClinicSystem.jpg";
import PointOfSale from "../assets/POS_Restaurant.jpg";
import IMovie from "../assets/Movie.jpg";
import E_Learning from "../assets/Coding.jpg";

function Project() {
  const projects = [
    {
      id: 1,
      name: "E-Learning Platform",
      description:
        "Interactive learning platform featuring course navigation, interactive quizzes, and modern responsive design.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      image: E_Learning,
      url: "https://sovanrotha.github.io/Code-learning/",
    },
    {
      id: 2,
      name: "Clinic Management System",
      description:
        "Comprehensive healthcare portal for scheduling patient appointments, record keeping, and billing workflows.",
      tags: ["React", "Node.js", "REST API"],
      image: ClinicSystem,
      url: "https://clinic-system-react-front-end.vercel.app/",
    },
    {
      id: 3,
      name: "Point of Sale System",
      description:
        "Real-time retail management system supporting live inventory updates and automated transaction records.",
      tags: ["React", "Tailwind CSS", "Express"],
      image: PointOfSale,
      url: "https://point-of-sale-system-front-end.vercel.app/",
    },
    {
      id: 4,
      name: "IMovie Streaming Portal",
      description:
        "Sleek entertainment catalog featuring movie search, filtering, dynamic previews, and cast details.",
      tags: ["JavaScript", "TMDB API", "CSS3"],
      image: IMovie,
      url: "https://preuniversity-gen05.github.io/imovie-platform/",
    },
  ];

  return (
    <section className="relative px-6 py-24 bg-stone-100/60 dark:bg-stone-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-stone-50 tracking-tight mb-4">
            Featured <span className="text-amber-500">Projects</span>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-lg mx-auto text-sm sm:text-base">
            A showcase of full-stack and front-end applications built for performance, usability, and scale.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800/80 shadow-sm hover:shadow-xl dark:hover:border-amber-500/30 transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden bg-stone-200 dark:bg-stone-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                
                {/* Live Badge */}
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-emerald-400 text-xs font-medium border border-emerald-500/30 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Demo
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-100 dark:border-stone-800">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;