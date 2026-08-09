import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript", level: 70 },
  { name: "React", level: 80 },
  { name: "Python", level: 50 },
  { name: "PHP", level: 80 },
  { name: "Laravel", level: 60 },
  { name: "C++", level: 50 },
  { name: "Tailwind CSS", level: 90 },
  { name: "HTML/CSS", level: 90 },
  { name: "Git/GitHub", level: 80 },
  { name: "MySQL", level: 70 },
  { name: "PostgreSQL", level: 80 },
];

const tags = [
  "GraphQL",
  "Docker",
  "Figma",
  "Redis",
  "Three.js",
  "Rust",
  "TypeScript",
  "Node.js",
];

const stats = [
  { n: "1+", l: "Years Exp." },
  { n: "4+", l: "Projects" },
];

/* ── Intersection Hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ── Reveal Motion Wrapper ── */
function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const [ref, visible] = useInView();
  const hidden =
    direction === "left"
      ? "opacity-0 -translate-x-10"
      : direction === "right"
      ? "opacity-0 translate-x-10"
      : "opacity-0 translate-y-8";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Animated Skill Bar ── */
function SkillBar({ name, level, delay, animate, index }) {
  const colors = [
    "from-blue-400 to-blue-600",
    "from-emerald-400 to-emerald-600",
    "from-purple-400 to-purple-600",
    "from-rose-400 to-rose-600",
    "from-amber-400 to-amber-600",
    "from-pink-400 to-pink-600",
    "from-indigo-400 to-indigo-600",
    "from-teal-400 to-teal-600",
    "from-orange-400 to-orange-600",
    "from-cyan-400 to-cyan-600",
  ];
  const color = colors[index % colors.length];

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-stone-700 dark:text-stone-200">
          {name}
        </span>
        <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tabular-nums">
          {level}%
        </span>
      </div>
      <div className="w-full h-2 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{
            width: animate ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const [skillsRef, skillsVisible] = useInView(0.2);

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 overflow-hidden bg-amber-50/60 dark:bg-stone-950 transition-colors duration-500"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 rounded-full bg-amber-300/20 dark:bg-amber-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-amber-400/20 dark:bg-stone-800/40 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal className="mb-16">
          <p className="text-amber-600 dark:text-amber-400 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="block w-6 h-[2px] bg-amber-500 rounded-full" />
            Get to know me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-50 leading-tight">
            About{" "}
            <span className="italic text-amber-600 dark:text-amber-400">
              Me
            </span>
          </h2>
        </Reveal>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio & Stats */}
          <div className="space-y-8">
            {/* Bio Card */}
            <Reveal direction="left">
              <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-md rounded-3xl p-8 border border-amber-200/60 dark:border-stone-800 shadow-xl shadow-amber-950/5 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl shadow-inner">
                      👩‍💻
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-stone-900 animate-pulse" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 dark:text-stone-100 text-base">
                      Full-Stack Developer
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Phnom Penh, Cambodia · Open to Remote
                    </p>
                  </div>
                </div>

                <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm md:text-base">
                  I'm a full-stack developer with{" "}
                  <strong className="text-stone-900 dark:text-stone-100 font-semibold">
                    1+ years of experience
                  </strong>{" "}
                  building web applications that focus on clarity, performance, and scalability. 
                  My work spans across front-end interactions to back-end architecture with a goal of creating{" "}
                  <strong className="text-amber-600 dark:text-amber-400 font-semibold">
                    less friction and more delight
                  </strong>.
                </p>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-xs md:text-sm">
                  Outside of coding, I spend my time exploring modern UI frameworks, contributing to personal software projects, and learning new technology stacks.
                </p>
              </div>
            </Reveal>

            {/* Stats Row */}
            <Reveal direction="left" delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ n, l }) => (
                  <div
                    key={l}
                    className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-md rounded-2xl p-5 text-center border border-amber-200/60 dark:border-stone-800 shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <p className="font-serif text-3xl font-black text-amber-600 dark:text-amber-400">
                      {n}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-semibold tracking-wide uppercase">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Familiar Tech Tags */}
            <Reveal direction="left" delay={200}>
              <div className="bg-white/40 dark:bg-stone-900/40 rounded-2xl p-6 border border-amber-200/40 dark:border-stone-800/60">
                <p className="text-xs font-bold tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-3">
                  Also Familiar With
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 hover:border-amber-500/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Technical Skills */}
          <div ref={skillsRef}>
            <Reveal direction="right">
              <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-md rounded-3xl p-8 border border-amber-200/60 dark:border-stone-800 shadow-xl shadow-amber-950/5">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                      Core Skills
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                      Technical proficiencies & stack
                    </p>
                  </div>
                  <div className="flex gap-1.5 text-[10px] font-bold">
                    <span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                      Expert ≥85%
                    </span>
                    <span className="px-2 py-1 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800">
                      Good ≥70%
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {skills.map((s, i) => (
                    <SkillBar
                      key={s.name}
                      {...s}
                      delay={i * 60}
                      animate={skillsVisible}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}