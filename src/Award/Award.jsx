import React, { useState, useEffect } from "react";
import GradeA from "../assets/Award Folder/Grade A.jpg";
import AuppGPA from "../assets/Award Folder/Aupp GPA.jpg";
import AuppScholar from "../assets/Award Folder/Aupp Scholarship.jpg";
import EnglishAward from "../assets/Award Folder/English Certificate.jpg";
import NumberOne from "../assets/Award Folder/Number 1.jpg";
import OverallAward from "../assets/Award Folder/Orverall Award.jpg";
import TopScorer from "../assets/Award Folder/TopScorer.jpg";

function Award() {
  const [selected, setSelected] = useState(null);

  const awards = [
    {
      id: 1,
      name: "Grade A Award — 99.9943",
      description: "Awarded for achieving an A grade across exams.",
      image: GradeA,
    },
    {
      id: 2,
      name: "AUPP GPA Award",
      description: "Recognized for a high GPA in freshman year.",
      image: AuppGPA,
    },
    {
      id: 3,
      name: "AUPP Scholarship Award",
      description: "Awarded a scholarship from AUPP.",
      image: AuppScholar,
    },
    {
      id: 4,
      name: "English Certificate Award",
      description: "Recognized for excellence in English proficiency.",
      image: EnglishAward,
    },
    {
      id: 5,
      name: "Number One Award",
      description: "Ranked highest in class.",
      image: NumberOne,
    },
    {
      id: 6,
      name: "Overall Award",
      description: "Recognized for outstanding performance across multiple areas.",
      image: OverallAward,
    },
    {
      id: 7,
      name: "Top Scorer Award",
      description: "Achieved the highest score in a subject or exam.",
      image: TopScorer,
    },
  ];

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .home-serif { font-family: 'Playfair Display', serif !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }

        .anim-fade-up-1 { animation: fadeUp .7s ease both; }
        .anim-fade-in   { animation: fadeIn .8s ease both .2s; }
        .modal-pop      { animation: modalIn .3s cubic-bezier(.34,1.56,.64,1) both; }
        .dot-pulse      { animation: pulse 1.8s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #d97706 0%, #fbbf24 40%, #d97706 60%, #92400e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cert-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .cert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 36px rgba(217,119,6,.16);
          border-color: rgba(217,119,6,.4);
        }
        .cert-card:hover .cert-overlay { opacity: 1; }
        .cert-overlay { transition: opacity .25s ease; }

        .seal {
          filter: drop-shadow(0 4px 8px rgba(0,0,0,.15));
        }
      `}</style>

      <section className="relative bg-amber-50 dark:bg-stone-950 min-h-screen px-6 pt-24 pb-24 transition-colors duration-500">
        {/* Ambient background */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-amber-200/40 dark:bg-amber-900/20 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-0 -left-24 w-[320px] h-[320px] rounded-full bg-amber-300/25 dark:bg-amber-800/15 blur-[70px]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="anim-fade-up-1 text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dot-pulse" />
              {awards.length} Awards Earned
            </span>
            <h1 className="home-serif text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-50 mb-4">
              A shelf of <span className="shimmer-text">certificates</span>
            </h1>
            <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto">
              Academic recognitions and scholarships collected along the way.
              Tap any certificate for a closer look.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <button
                key={award.id}
                onClick={() => setSelected(award)}
                style={{ animationDelay: `${0.08 * i}s` }}
                className="cert-card anim-fade-up-1 text-left rounded-2xl overflow-hidden border border-amber-100 dark:border-stone-800 bg-white/80 dark:bg-stone-900/70 backdrop-blur shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <div className="relative">
                  <img
                    src={award.image}
                    alt={award.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="cert-overlay opacity-0 absolute inset-0 bg-stone-900/40 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold tracking-wide uppercase px-4 py-2 rounded-full border border-white/60">
                      View certificate
                    </span>
                  </div>
                  <span className="seal absolute -top-3 -left-3 text-3xl">🏅</span>
                </div>
                <div className="p-5">
                  <h2 className="home-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-1.5 leading-snug">
                    {award.name}
                  </h2>
                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="anim-fade-in fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-sm px-6 py-10"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-pop relative max-w-2xl w-full bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-200/50 dark:border-stone-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-stone-800/90 text-stone-700 dark:text-stone-200 shadow-lg hover:bg-white dark:hover:bg-stone-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full max-h-[70vh] object-contain bg-stone-100 dark:bg-stone-950"
            />
            <div className="p-6">
              <h2 className="home-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                {selected.name}
              </h2>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Award;