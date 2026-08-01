const arrowPath =
  "M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z";

function CtaButton({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-white pl-6 pr-3 py-2.5 text-[17px] font-semibold text-black transition-colors duration-300 hover:text-white"
    >
      <span
        className="absolute inset-0 -left-full rounded-full transition-all duration-700 ease-out group-hover:left-0 group-hover:scale-[2.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-corner at 10% 20%, rgba(20,12,239,1) 0%, rgba(198,253,249,1) 90%)",
        }}
      />
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 16 19"
        className="relative z-10 w-8 h-8 rotate-45 rounded-full border border-black p-2 transition-all duration-300 group-hover:rotate-90 group-hover:border-none"
      >
        <path fill="currentColor" d={arrowPath} />
      </svg>
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-5 md:px-8 py-16 md:py-24"
    >
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I'm Youssef Rezgui
        </h1>
        <p className="text-xl md:text-2xl text-accent-soft mb-5">
          Business Intelligence Student | Aspiring Web Developer
        </p>
        <p className="text-base md:text-lg text-ink-muted leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
          I'm a 3rd-year Business Intelligence student passionate about web
          development. Currently looking for an internship opportunity to
          grow my skills and contribute to real-world projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <CtaButton href="#projects">View my projects</CtaButton>
          <CtaButton href="#contact">Contact me</CtaButton>
        </div>
      </div>

      <div className="flex-1 w-full">
        <video
          controls
          playsInline
          className="w-full rounded-2xl border border-line shadow-glow"
        >
          <source src="/assets/myvideo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
