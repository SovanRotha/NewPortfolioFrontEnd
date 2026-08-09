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
    color: "hover:text-stone-800 dark:hover:text-stone-100 hover:border-stone-400 dark:hover:border-stone-400",
    bg: "hover:bg-stone-100 dark:hover:bg-stone-700",
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
    bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
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
    bg: "hover:bg-amber-50 dark:hover:bg-amber-900/20",
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
    bg: "hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
  },
];

// Set this to your deployed Laravel API URL once it's live on Render/Railway,
// e.g. "https://your-contact-api.onrender.com/api/contact"
const CONTACT_API_URL = "http://127.0.0.1:8000/api/contacts";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState("");

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

      const data = await res.json();

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

  const inputBase = `
    w-full px-4 py-3 rounded-xl text-sm
    bg-white dark:bg-stone-800
    border transition-all duration-200
    text-stone-800 dark:text-stone-100
    placeholder:text-stone-400 dark:placeholder:text-stone-500
    outline-none
  `;
  const inputIdle = "border-amber-200/80 dark:border-stone-700";
  const inputFocus = "border-amber-400 dark:border-amber-500 shadow-[0_0_0_3px_rgba(245,158,11,0.12)]";

  return (
    <section
      id="contact"
      className="relative bg-amber-100 dark:bg-stone-950 min-h-screen px-6 py-20 md:px-8 overflow-hidden transition-colors duration-500"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-200/50 dark:bg-amber-900/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-300/30 dark:bg-stone-800/50 blur-3xl -translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 max-w-[1000px] mx-auto">

        {/* ── Header ── */}
        <div
          className="mb-12 opacity-0 translate-y-5 animate-[fadeUp_0.6s_ease_forwards]"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-5 h-px bg-amber-500" />
            <span
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get in Touch
            </span>
          </div>
          <h1
            className="font-black leading-none tracking-tight text-stone-800 dark:text-stone-100 mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
            }}
          >
            Let's Work{" "}
            <em className="text-amber-600 dark:text-amber-400" style={{ fontStyle: "italic" }}>
              Together
            </em>
          </h1>
          <p
            className="text-stone-500 dark:text-stone-400 text-[15px] max-w-md leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">

          {/* Left — Social links */}
          <div
            className="md:col-span-2 opacity-0 translate-y-5 animate-[fadeUp_0.6s_ease_forwards]"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <p
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-stone-400 dark:text-stone-500 mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Find Me Via
            </p>

            <ul className="flex flex-col gap-3">
              {socials.map((s, i) => (
                <li
                  key={s.label}
                  className="opacity-0 translate-x-[-12px] animate-[slideIn_0.45s_ease_forwards]"
                  style={{ animationDelay: `${i * 80 + 200}ms`, animationFillMode: "forwards" }}
                >
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`
                      group flex items-center gap-3.5 px-4 py-3 rounded-xl
                      bg-white/70 dark:bg-stone-800/70
                      border border-amber-200/60 dark:border-stone-700/60
                      text-stone-500 dark:text-stone-400
                      backdrop-blur-sm shadow-sm
                      transition-all duration-200
                      ${s.color} ${s.bg}
                      hover:shadow-md hover:-translate-y-0.5
                    `}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="transition-transform duration-200 group-hover:scale-110">
                      {s.icon}
                    </span>
                    <span className="text-sm font-medium">{s.label}</span>
                    <svg
                      className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
                      fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            {/* Decorative card */}
            <div
              className="mt-8 p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-300/40 dark:border-amber-700/30 opacity-0 animate-[fadeUp_0.5s_ease_forwards]"
              style={{ animationDelay: "550ms", animationFillMode: "forwards" }}
            >
              <p
                className="text-xs text-amber-700 dark:text-amber-400/80 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                💡 I'm currently open to freelance projects and full-time opportunities. Let's build something great together!
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="md:col-span-3 opacity-0 translate-y-5 animate-[fadeUp_0.6s_ease_forwards]"
            style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
          >
            <div className="bg-white/80 dark:bg-stone-800/70 backdrop-blur-sm rounded-2xl border border-amber-200/70 dark:border-stone-700/60 shadow-sm p-6 md:p-8">

              {/* Success state */}
              {sent && (
                <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-400 text-sm animate-[fadeUp_0.4s_ease_forwards]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {/* Error state */}
              {error && (
                <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 text-red-700 dark:text-red-400 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.007v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label
                    className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-stone-400 dark:text-stone-500 mb-1.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    placeholder="Sovan Rotha"
                    required
                    className={`${inputBase} ${focused === "name" ? inputFocus : inputIdle}`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-stone-400 dark:text-stone-500 mb-1.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="hello@example.com"
                    required
                    className={`${inputBase} ${focused === "email" ? inputFocus : inputIdle}`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-stone-400 dark:text-stone-500 mb-1.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className={`${inputBase} resize-none ${focused === "message" ? inputFocus : inputIdle}`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="group mt-1 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                    bg-amber-500 hover:bg-amber-400
                    text-white font-semibold text-sm
                    shadow-md hover:shadow-lg hover:shadow-amber-200 dark:hover:shadow-amber-900/40
                    transition-all duration-200
                    hover:-translate-y-0.5 active:translate-y-0
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {sending ? "Sending..." : "Send Message"}
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}