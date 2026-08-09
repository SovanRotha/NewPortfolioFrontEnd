const educations = [
  {
    degree: "High School Diploma",
    school: "KamPong Thom High School",
    period: "2022 – 2024",
    detail: "Grade A student with 99.943 scores.",
    icon: "🎓",
    done: true,
  },
  {
    degree: "Bachelor's Degree in Software Development",
    school: "American University of Phnom Penh",
    period: "2025 – 2030",
    detail: "Pursuing a full degree in Software Development.",
    icon: "🏛️",
    done: false,
  },
  {
    degree: "Front-End Development",
    school: "ISTAD",
    period: "2025 – 2026",
    detail: "Studying modern front-end technologies and frameworks.",
    icon: "💻",
    done: true,
  },
  {
    degree: "Back-End Development",
    school: "Etec",
    period: "2026 – 2027",
    detail: "Studying server-side programming and databases.",
    icon: "⚙️",
    done: true,
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative bg-amber-100 dark:bg-stone-950 min-h-screen px-6 py-20 md:px-8 overflow-hidden transition-colors duration-500"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-200/50 dark:bg-amber-900/10 blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-300/30 dark:bg-stone-800/50 blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 max-w-[780px] mx-auto">

        {/* ── Header ── */}
        <div
          className="mb-14 opacity-0 translate-y-5 animate-[fadeUp_0.6s_ease_forwards]"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-5 h-px bg-amber-500" />
            <span
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              My Journey
            </span>
          </div>
          <h1
            className="font-black leading-none tracking-tight text-stone-800 dark:text-stone-100"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
            }}
          >
            Edu
            <em className="text-amber-600 dark:text-amber-400" style={{ fontStyle: "italic" }}>
              cation
            </em>
          </h1>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-amber-200 dark:bg-stone-700 md:left-[26px]" />

          <div className="flex flex-col gap-6">
            {educations.map((edu, i) => (
              <div
                key={i}
                className="opacity-0 translate-y-5 animate-[fadeUp_0.55s_ease_forwards] pl-14 md:pl-16"
                style={{ animationDelay: `${i * 120 + 150}ms`, animationFillMode: "forwards" }}
              >
                {/* Dot + icon */}
                <div className="absolute left-0 flex items-center justify-center w-11 h-11 md:w-[52px] md:h-[52px] rounded-full bg-white dark:bg-stone-800 border-2 border-amber-300 dark:border-stone-600 shadow-sm group-hover:border-amber-500 transition-colors">
                  <span className="text-lg leading-none">{edu.icon}</span>
                </div>

                {/* Card */}
                <div
                  className="group relative rounded-2xl bg-white/80 dark:bg-stone-800/70 border border-amber-200/70 dark:border-stone-700/60 backdrop-blur-sm p-5 md:p-6 shadow-sm
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:shadow-md hover:border-amber-400/60 dark:hover:border-amber-500/40"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h4
                      className="text-[1rem] font-bold text-stone-800 dark:text-stone-100 leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {edu.degree}
                    </h4>

                    {/* Status badge */}
                    <span
                      className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide
                        ${edu.done
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        }`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${edu.done ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />
                      {edu.done ? "Completed" : "In Progress"}
                    </span>
                  </div>

                  {/* School */}
                  <p
                    className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {edu.school}
                  </p>

                  {/* Period */}
                  <span
                    className="inline-flex items-center gap-1 text-[11px] text-stone-400 dark:text-stone-500 mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.period}
                  </span>

                  {/* Detail */}
                  <p
                    className="text-[13px] text-stone-500 dark:text-stone-400 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {edu.detail}
                  </p>

                  {/* Hover accent bar */}
                  <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-amber-400 dark:bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}