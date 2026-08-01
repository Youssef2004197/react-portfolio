const CERTIFICATES = [
  { img: "/assets/github.jpg", title: "Github Certification", issuer: "Nexus it club — 2025" },
  { img: "/assets/jobfair.png", title: "Job Fair Participation", issuer: "FSEGT — 2026" },
  { img: "/assets/n8n.png", title: "n8n Certification", issuer: "Enactus FSEGT — 2026" },
  { img: "/assets/Portes.png", title: "Portes Ouvertes Participation", issuer: "FSEGT — 2026" },
  { img: "/assets/RH.png", title: "Nexus RH Certification", issuer: "Nexus it club — 2026" },
  { img: "/assets/video.jpg", title: "Video Editing Certification", issuer: "Nexus it club — 2026" },
  { img: "/assets/xtreme.jpg", title: "Xtreme Certification", issuer: "IEEE — 2025" },
];

export default function Certificates({ onOpen }) {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-5 md:px-8 py-20">
      <div className="kicker">Learning</div>
      <h2 className="section-title mb-12">Certificates</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {CERTIFICATES.map((cert, i) => (
          <div key={i} className="card rounded-xl2 p-5 w-full max-w-[300px] text-center">
            <div
              className="w-full h-44 rounded-lg overflow-hidden bg-bg-surface2 mb-4 cursor-pointer"
              onClick={() => onOpen(cert.img)}
            >
              <img src={cert.img} alt={cert.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg mb-1">{cert.title}</h3>
            <p className="text-sm text-ink-muted">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
