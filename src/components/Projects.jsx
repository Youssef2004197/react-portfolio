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
        <div className="card rounded-xl2 p-5 w-full max-w-[320px]">
          <div className="w-full h-44 rounded-lg overflow-hidden bg-bg-surface2 mb-4">
            <img
              src="/assets/weatherapp.png"
              alt="WeatherPlus"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl mb-2">WeatherPlus</h3>

          <p className="text-sm text-ink-muted mb-4">
            A modern weather application built with Flutter and Dart,
            powered by WeatherAPI to provide real-time weather information
            and forecasts.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-accent-dim text-accent-soft">
                Flutter
              </span>

              <span className="text-xs px-2 py-1 rounded-full bg-accent-dim text-accent-soft">
                Dart
              </span>

              <span className="text-xs px-2 py-1 rounded-full bg-accent-dim text-accent-soft">
                WeatherAPI
              </span>
            </div>

            <a
              href="https://github.com/Youssef2004197/weather_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View WeatherPlus on GitHub"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-black hover:bg-transparent hover:text-white transition-all"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

