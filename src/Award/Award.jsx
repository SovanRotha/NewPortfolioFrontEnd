import { useState, useEffect } from "react";
import GradeA from "../assets/Award Folder/Grade A.jpg";
import AuppGPA from "../assets/Award Folder/Aupp GPA.jpg";
import AuppScholar from "../assets/Award Folder/Aupp Scholarship.jpg";
import EnglishAward from "../assets/Award Folder/English Certificate.jpg";
import NumberOne from "../assets/Award Folder/Number 1.jpg";
import OverallAward from "../assets/Award Folder/Orverall Award.jpg";
import TopScorer from "../assets/Award Folder/TopScorer.jpg";
import ISTAD from "../assets/Award Folder/ISTAD.jpg";
import ETEC from "../assets/Award Folder/ETEC.jpg";

const awards = [
  { id: 1, name: "Grade A Award — 99.9943", description: "Awarded for achieving an A grade across national exams.", image: GradeA },
  { id: 2, name: "AUPP GPA Award", description: "Recognized for a high GPA throughout freshman year.", image: AuppGPA },
  { id: 3, name: "AUPP Scholarship Award", description: "Awarded a merit-based academic scholarship from AUPP.", image: AuppScholar },
  { id: 4, name: "English Certificate Award", description: "Recognized for high-level proficiency in English language skills.", image: EnglishAward },
  { id: 5, name: "Number One Award", description: "Ranked first overall in academic class performance.", image: NumberOne },
  { id: 6, name: "Overall Award", description: "Recognized for outstanding achievement across multiple categories.", image: OverallAward },
  { id: 7, name: "Top Scorer Award", description: "Achieved highest total test score in competitive examinations.", image: TopScorer },
  { id: 8, name: "ISTAD Certificate", description: "After completed program as a Junior Web Developer.", image: ISTAD },
  { id: 9, name: "ETEC Certificate", description: "Completion of advanced web development course.", image: ETEC },
];

export default function Award() {
  const [selected, setSelected] = useState(null);

  // Close modal on Escape key press & prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };

    if (selected) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <section className="relative bg-amber-50/60 dark:bg-stone-950 min-h-screen px-6 py-20 md:px-12 transition-colors duration-500">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 rounded-full bg-amber-300/20 dark:bg-amber-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 rounded-full bg-amber-400/20 dark:bg-stone-800/40 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
            🏅 {awards.length} Recognitions & Honors
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-100 font-serif tracking-tight">
            A Shelf of <span className="italic text-amber-600 dark:text-amber-400">Certificates</span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-base max-w-lg mx-auto leading-relaxed">
            Academic honors and scholarships collected throughout my learning journey. Select any award to inspect.
          </p>
        </div>

        {/* Awards Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              onClick={() => setSelected(award)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white/80 dark:bg-stone-900/80 border border-amber-200/50 dark:border-stone-800/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-stone-950">
                <img
                  src={award.image}
                  alt={award.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40">
                    View Award
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                  {award.name}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-md p-4 md:p-8"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-amber-200/40 dark:border-stone-800 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Close details"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="max-h-[60vh] bg-stone-950 flex items-center justify-center overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            {/* Modal Text Details */}
            <div className="p-6 md:p-8">
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                {selected.name}
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}