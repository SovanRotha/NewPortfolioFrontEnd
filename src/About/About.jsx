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
  { name: "PostreSQL", level: 80 },
];

const tags = ["GraphQL", "Docker", "Figma", "Redis", "Three.js", "Rust", "TypeScript", "Node.js"];

const stats = [
  { n: "1+", l: "Years Exp." },
  { n: "4+", l: "Projects" },
  
];

/* ── tiny hook: fires when element enters viewport ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Reveal wrapper ── */
function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const [ref, visible] = useInView();
  const hidden =
    direction === "left"  ? "opacity-0 -translate-x-10"
    : direction === "right" ? "opacity-0 translate-x-10"
    : "opacity-0 translate-y-8";
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : hidden} ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Animated skill bar ── */
function SkillBar({ name, level, delay, animate, index }) {
  const colors = [
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-purple-400 to-purple-600",
    "from-red-400 to-red-600",
    "from-yellow-400 to-yellow-600",
    "from-pink-400 to-pink-600",
    "from-indigo-400 to-indigo-600",
    "from-teal-400 to-teal-600",
    "from-orange-400 to-orange-600",
    "from-cyan-400 to-cyan-600"
  ];
  const color = colors[index % colors.length];

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-stone-700 dark:text-stone-200">{name}</span>
        <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tabular-nums">{level}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const [skillsRef, skillsVisible] = useInView(0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .about-serif { font-family: 'Playfair Display', serif !important; }
        body { font-family: 'DM Sans', sans-serif; }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-10px) rotate(1deg); }
          66%       { transform: translateY(-5px) rotate(-1deg); }
        }
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes tagFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }

        .float-slow   { animation: floatSlow 6s ease-in-out infinite; }
        .spin-slow    { animation: spinSlow 20s linear infinite; }
        .dot-pulse    { animation: pulse 1.8s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #d97706 0%, #fbbf24 40%, #d97706 60%, #92400e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .tag-chip:nth-child(odd)  { animation: tagFloat 3.2s ease-in-out infinite; }
        .tag-chip:nth-child(even) { animation: tagFloat 3.2s ease-in-out infinite .8s; }

        .stat-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(217,119,6,.18);
        }

        .glass-card {
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(18px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.7);
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .dark .glass-card {
          background: rgba(28,25,23,0.55);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.09);
        }

        .skill-level-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 99px;
        }
      `}</style>

      <section
        id="about"
        className="relative py-28 px-6 overflow-hidden bg-white dark:bg-stone-950 transition-colors duration-500"
      >
        {/* ── ambient blobs ── */}
        <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 rounded-full bg-amber-100/60 dark:bg-amber-900/15 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-amber-200/40 dark:bg-amber-800/10 blur-[70px]" />

        {/* ── decorative spinning ring ── */}
        <div className="pointer-events-none absolute top-16 right-16 w-40 h-40 spin-slow opacity-20 dark:opacity-10">
          <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
            <circle cx="80" cy="80" r="72" stroke="#d97706" strokeWidth="1.5" strokeDasharray="8 6" />
            <circle cx="80" cy="80" r="52" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4 8" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* ── Section header ── */}
          <Reveal className="mb-16">
            <p className="text-amber-600 dark:text-amber-400 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="block w-6 h-px bg-amber-400" />
              Get to know me
            </p>
            <h2 className="about-serif text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-50 leading-tight">
              About <span className="shimmer-text">Me</span>
            </h2>
          </Reveal>

          {/* ── Main grid ── */}
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* ── LEFT col ── */}
            <div className="space-y-8">

              {/* Bio card */}
              <Reveal direction="left">
                <div className="glass-card rounded-3xl p-7 space-y-4">
                  {/* avatar row */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center text-2xl shadow-lg float-slow">
                        👩‍💻
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white dark:border-stone-900 dot-pulse" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 dark:text-stone-100 text-base">Full-Stack Developer</p>
                      <p className="text-xs text-stone-400 dark:text-stone-500 flex items-center gap-1 mt-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Phnom Penh, Cambodia · Open to remote
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-[15px]">
                    I'm a full-stack developer with{" "}
                    <strong className="text-stone-900 dark:text-stone-100">1+ years of experience</strong>{" "}
                    building products people actually enjoy using. My work spans from early-stage startups to enterprise teams, always with the same goal:{" "}
                    <strong className="text-amber-600 dark:text-amber-400">less friction, more delight</strong>.
                  </p>
                  <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-sm">
                    Outside of shipping code I explore generative art, contribute to open-source, and take too many photos on film cameras. Currently based in Cambodia, open to remote collaboration worldwide.
                  </p>
                </div>
              </Reveal>

              {/* Stats row */}
              <Reveal direction="left" delay={100}>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map(({ n, l }, i) => (
                    <div key={l} className="stat-card glass-card rounded-2xl p-4 text-center" style={{ animationDelay: `${i * 80}ms` }}>
                      <p className="about-serif text-3xl font-black text-amber-600 dark:text-amber-400">{n}</p>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-medium">{l}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Tags */}
              {/* <Reveal direction="left" delay={200}>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-3">Also familiar with</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="tag-chip text-xs font-medium px-3 py-1.5 rounded-full bg-amber-50 dark:bg-stone-800 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-stone-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal> */}
            </div>

            {/* ── RIGHT col: Skills ── */}
            <div ref={skillsRef}>
              <Reveal direction="right">
                <div className="glass-card rounded-3xl p-7">
                  {/* header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="about-serif text-xl font-bold text-stone-900 dark:text-stone-100">Core Skills</h3>
                      <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">Honed over the years</p>
                    </div>
                    <div className="flex gap-2 text-[10px] font-bold">
                      <span className="skill-level-badge bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">Expert ≥85</span>
                      <span className="skill-level-badge bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400">Good ≥70</span>
                    </div>
                    
                  </div>

                  {/* bars */}
                  <div className="space-y-5">
                    {skills.map((s, i) => (
                      <Reveal key={s.name} direction="right" delay={i * 60}>
                        <SkillBar {...s} delay={i * 100} animate={skillsVisible} index={i} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}