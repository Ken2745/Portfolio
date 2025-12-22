export default function GlassLayout({ children }) {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
      <div
        className="
          rounded-3xl
          bg-white/5
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_0_60px_-15px_rgba(124,58,237,0.35)]
        "
      >
        {children}
      </div>
    </div>
  );
}

