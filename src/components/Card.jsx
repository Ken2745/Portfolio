// export default function Card({ children }) {
//   return (
//     <div
//       className="
//         bg-white/10 backdrop-blur-xl
//         border border-white/20
//         rounded-2xl p-6
//         shadow-lg
//         hover:shadow-xl hover:scale-[1.01]
//         transition
//       "
//     >
//       {children}
//     </div>
//   );
// }

// export default function Card({ children }) {
//   return (
//     <div
//       className="
//         rounded-2xl
//         bg-white/5
//         backdrop-blur-xl
//         border border-white/10
//         p-6
//         shadow-lg
//         hover:border-purple-400/40
//         transition
//       "
//     >
//       {children}
//     </div>
//   );
  
// }

export default function Card({ children }) {
  return (
    <div
      className="
        glass-hover
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl p-6
        shadow-lg
      "
    >
      {children}
    </div>
  );
}


