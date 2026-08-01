/*
  TEMPLATE — once you build a real project, replace the coming-soon
  card below with entries like this one (duplicate as needed):

  <div className="card rounded-xl2 p-5 w-full max-w-[320px]">
    <div className="w-full h-44 rounded-lg overflow-hidden bg-bg-surface2 mb-4">
      <img src="/assets/your-screenshot.png" alt="Project name" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl mb-2">Project Name</h3>
    <p className="text-sm text-ink-muted mb-4">Short description of the project.</p>
    <a
      href="https://github.com/Youssef2004197/your-repo"
      target="_blank"
      rel="noopener"
      className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-black hover:bg-transparent hover:text-white transition-all"
    >
      <GithubIcon />
    </a>
  </div>
*/

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 md:px-8 py-20">
      <div className="kicker">Work</div>
      <h2 className="section-title mb-12">Projects</h2>

      <div className="flex justify-center">
        <div className="card rounded-xl2 p-10 md:p-14 max-w-lg text-center">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent-dim flex items-center justify-center text-accent-soft">
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
              <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path
                d="M7 9l-2 2 2 2M17 9l2 2-2 2M13 8l-2 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-xl mb-2">Projects Coming Soon</h3>
          <p className="text-ink-muted text-sm leading-relaxed">
            I'm currently building projects with HTML, CSS, Tailwind,
            JavaScript and React. They'll be showcased here soon.
          </p>
        </div>
      </div>
    </section>
  );
}
