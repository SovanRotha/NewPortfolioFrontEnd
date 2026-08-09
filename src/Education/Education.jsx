import React from "react";

const educations = [
  {
    degree: "High School Diploma",
    school: "KamPong Thom High School",
    period: "2022 – 2024",
    detail: "Graduated with Grade A distinction (99.943 percentile score).",
    icon: "🎓",
    done: true,
  },
  {
    degree: "Bachelor's Degree in Software Development",
    school: "American University of Phnom Penh",
    period: "2025 – 2030",
    detail: "Pursuing core software engineering principles, algorithms, and system design.",
    icon: "🏛️",
    done: false,
  },
  {
    degree: "Front-End Development Program",
    school: "ISTAD",
    period: "2025 – 2026",
    detail: "Advanced training in modern JavaScript frameworks, UI/UX, and state management.",
    icon: "💻",
    done: true,
  },
  {
    degree: "Back-End Development Program",
    school: "ETEC",
    period: "2026 – 2027",
    detail: "Specialized study in RESTful APIs, relational databases, and server architectures.",
    icon: "⚙️",
    done: true,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24 bg-stone-50 dark:bg-stone-950 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            Academic Track
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-stone-50 tracking-tight">
            Education & <span className="text-amber-500">Training</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-stone-200 dark:border-stone-800 space-y-10">
          {educations.map((edu, i) => (
            <div key={i} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-stone-900 border-2 border-amber-500 flex items-center justify-center text-sm shadow-md">
                {edu.icon}
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800/80 backdrop-blur-md shadow-sm hover:border-amber-500/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    {edu.degree}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      edu.done
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${edu.done ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />
                    {edu.done ? "Completed" : "In Progress"}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-3">
                  <span>{edu.school}</span>
                  <span className="text-stone-300 dark:text-stone-700">•</span>
                  <span className="text-stone-500 dark:text-stone-400">{edu.period}</span>
                </div>

                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {edu.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}