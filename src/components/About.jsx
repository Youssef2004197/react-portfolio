const SKILLS = ["HTML", "CSS", "JavaScript", "PHP", "Python", "Java", "C", "SQL", "NoSQL"];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 md:px-8 py-20">
      <div className="kicker">About</div>
      <h2 className="section-title mb-12">About Me</h2>

      <div className="flex items-start justify-center gap-8 md:gap-12">
        
        <div className="max-w-2xl">
          <p className="text-base md:text-lg leading-relaxed text-ink-muted text-left md:text-justify">
            Hi, my name is Youssef Rezgui. I'm a third-year student in
            Management Information Systems, specializing in Business
            Intelligence, at the Faculty of Economic Sciences and Management
            of Tunis, University of Tunis El Manar. Throughout my studies,
            I've built solid foundations in web development and programming,
            including HTML, CSS, JavaScript, PHP, Python, Java, C, as well as
            SQL and NoSQL databases. I'm passionate about web development, and
            I keep learning modern frameworks and technologies on my own to
            stay up to date. Alongside my studies, I serve as Human Resources
            Officer at the Nexus IT Club, where I've developed strong skills
            in teamwork, communication, and event organization. I'm a
            serious, curious person with a strong analytical mindset, and I
            adapt quickly to new environments. I'm currently looking for a
            4-month graduation internship, from February to May 2027, in web
            development, where I can put my skills into practice and
            contribute to real projects.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full border border-line text-sm transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/assets/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[16px] font-semibold text-black transition-all duration-300 hover:bg-accent-soft hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path
                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
