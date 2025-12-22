export default function Card({ children }) {
  return (
    <div
      className="
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl p-6
        shadow-lg
        hover:shadow-xl hover:scale-[1.01]
        transition
      "
    >
      {children}
    </div>
  );
}

