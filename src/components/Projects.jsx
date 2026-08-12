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
    <section
      id="projects"
      className="max-w-6xl mx-auto px-5 md:px-8 py-20"
    >
      <div className="kicker">Work</div>

      <h2 className="section-title mb-12">Projects</h2>

      <div className="flex justify-center">
        <div className="card rounded-xl2 p-5 w-full max-w-[320px]">
          
          {/* Project Image */}
          <div className="w-full h-44 rounded-lg overflow-hidden bg-bg-surface2 mb-4">
            <img
              src="/assets/weatherapp.png"
              alt="WeatherPlus"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info */}
          <h3 className="text-xl mb-2">WeatherPlus</h3>

          <p className="text-sm text-ink-muted mb-4">
            A modern weather application built with Flutter and Dart,
            using WeatherAPI to provide real-time weather information
            and forecasts.
          </p>

          {/* Technologies + GitHub */}
          <div className="flex items-center justify-between gap-3">
            
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
              aria-label="WeatherPlus GitHub Repository"
              className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-black hover:bg-transparent hover:text-white transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



