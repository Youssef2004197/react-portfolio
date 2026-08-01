const GALLERY = ["/assets/1.jpeg", "/assets/2.jpeg", "/assets/3.jpeg", "/assets/4.jpeg"];

export default function Experience({ onOpen }) {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 md:px-8 py-20">
      <div className="kicker">Extracurricular</div>
      <h2 className="section-title mb-12">Extracurricular Experience</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto mb-12">
        <img
          src="/assets/nexuslogo.png"
          alt="Nexus IT Club"
          className="w-56 flex-shrink-0 rounded-xl2 border border-line"
        />

        <div className="text-center md:text-left">
          <div className="flex flex-wrap items-baseline justify-center md:justify-between gap-2 mb-1">
            <h3 className="text-2xl">Human Resources (HR) Officer</h3>
            <span className="text-ink-muted text-sm">2025 – Present</span>
          </div>
          <p className="italic text-ink-muted mb-5">
            Nexus IT Club – Faculty of Economic Sciences and Management of Tunis (FSEGT)
          </p>
          <p className="text-ink-muted leading-relaxed mb-4 text-left">
            As an active member of Nexus IT Club, I've been involved in the
            association's various activities, taking part in organizing and
            coordinating the logistics of several events. I contributed to
            the planning and smooth running of 4 to 5 events organized by the
            club, which helped me develop strong skills in teamwork,
            communication, organization, and event management.
          </p>
          <p className="text-sm text-ink-faint">
            Participation and training certificates are available on my LinkedIn profile.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {GALLERY.map((src, i) => (
          <div
            key={i}
            onClick={() => onOpen(src)}
            className="w-56 h-56 rounded-xl2 overflow-hidden border border-line cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
          >
            <img src={src} alt={`Nexus IT Club event ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
