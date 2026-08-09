import { useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/SovanRotha",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    color: "hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400 dark:hover:border-amber-500",
    bg: "hover:bg-amber-500/10",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sovanrotha.pith",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500",
    bg: "hover:bg-blue-500/10",
  },
  {
    label: "Email",
    href: "mailto:sovanrothapit@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400 dark:hover:border-amber-500",
    bg: "hover:bg-amber-500/10",
  },
  {
    label: "Phone",
    href: "tel:+855962814489",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 dark:hover:border-emerald-500",
    bg: "hover:bg-emerald-500/10",
  },
];

const CONTACT_API_URL = "http://127.0.0.1:8000/api/contacts";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Couldn't send your message. Please try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative bg-amber-50/60 dark:bg-stone-950 min-h-screen px-6 py-20 md:px-12 overflow-hidden transition-colors duration-500">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-300/30 dark:bg-amber-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-amber-400/20 dark:bg-stone-800/40 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-stone-100 tracking-tight mb-4 font-serif">
            Let's Work{" "}
            <span className="italic text-amber-600 dark:text-amber-400">
              Together
            </span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-base max-w-lg leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? Reach out anytime!
          </p>
        </div>

        {/* Form & Social Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Social Links Panel */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-2">
              Direct Contact & Socials
            </p>
            
            <div className="grid gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-4 rounded-xl bg-white/70 dark:bg-stone-900/60 border border-amber-200/50 dark:border-stone-800 text-stone-700 dark:text-stone-300 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 ${s.color} ${s.bg}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {s.icon}
                    </span>
                    <span className="text-sm font-medium">{s.label}</span>
                  </div>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs leading-relaxed">
              💡 I am currently open to freelance design/development work and full-time software roles.
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="md:col-span-7 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md p-8 rounded-3xl border border-amber-200/60 dark:border-stone-800 shadow-xl shadow-amber-950/5">
            {sent && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Message sent successfully! I'll get back to you shortly.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Sovan Rotha"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/80 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/80 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/80 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {sending ? "Sending..." : "Send Message"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}