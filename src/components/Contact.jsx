import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvgdnpl";

function InfoIcon({ children }) {
  return (
    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-accent-dim text-accent-soft">
      {children}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus({ state: "sending", message: "Sending..." });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus({ state: "success", message: "Message sent! I'll get back to you soon." });
        form.reset();
      } else {
        setStatus({ state: "error", message: "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ state: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 md:px-8 py-20">
      <div className="kicker">Get in touch</div>
      <h2 className="section-title mb-12">Contact</h2>

      <div className="flex flex-wrap gap-8">
        {/* LEFT: info */}
        <div className="card rounded-xl2 p-8 flex-1 min-w-[300px]">
          <h3 className="text-2xl mb-2">Contact info</h3>
          <p className="text-sm text-ink-muted mb-8">
            Reach out directly, or use the form — either way I'll get back to you.
          </p>

          <div className="flex items-center gap-4 pb-4 mb-4 border-b border-line">
            <InfoIcon>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </InfoIcon>
            <div>
              <p className="text-xs text-ink-faint">email</p>
              <p>youssefrezgui2004@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-4 mb-4 border-b border-line">
            <InfoIcon>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8.09 9.63a16 16 0 0 0 6 6l1.19-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </InfoIcon>
            <div>
              <p className="text-xs text-ink-faint">phone</p>
              <p>+216 22 241 869</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-4 mb-6 border-b border-line">
            <InfoIcon>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </InfoIcon>
            <div>
              <p className="text-xs text-ink-faint">location</p>
              <p>El Omrane, Tunis, Tunisia</p>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/Youssef2004197"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-bg-surface2 hover:bg-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 98 98" width="18" height="18">
                <path
                  fill="currentColor"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/youssef-rezgui-375a49358"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-bg-surface2 hover:bg-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 448 512" width="16" height="16">
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: form */}
        <div className="card rounded-xl2 p-8 flex-[1.3] min-w-[300px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm text-ink-muted">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-bg-surface2 border border-line rounded-lg px-4 py-3 text-ink-primary placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-sm text-ink-muted">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="bg-bg-surface2 border border-line rounded-lg px-4 py-3 text-ink-primary placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-ink-muted">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me a bit about your project..."
                required
                className="bg-bg-surface2 border border-line rounded-lg px-4 py-3 text-ink-primary placeholder:text-ink-faint focus:border-accent outline-none transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "sending"}
              className="rounded-full bg-accent py-3.5 font-bold text-black hover:bg-accent-soft hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60"
            >
              Send message
            </button>

            {status.message && (
              <p
                className={`text-center text-sm ${
                  status.state === "success"
                    ? "text-emerald-400"
                    : status.state === "error"
                    ? "text-red-400"
                    : "text-ink-muted"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
