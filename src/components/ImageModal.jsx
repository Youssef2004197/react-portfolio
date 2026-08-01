export default function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Enlarged view"
        className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-glow"
      />
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-bg-surface border border-line text-ink-primary hover:border-accent transition-colors"
      >
        ✕
      </button>
    </div>
  );
}
