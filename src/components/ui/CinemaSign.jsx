export default function CinemaSign({ children }) {
  const bulbCount = 32;

  // Función para calcular la posición de cada bulbo alrededor del perímetro
  const getBulbPosition = (index, total) => {
    const percentage = (index / total) * 100;
    const perimeter = 200; // 100% del perímetro (4 lados)
    const position = (percentage / 100) * perimeter;

    // Top side (0-50)
    if (position < 50) {
      return {
        top: "0%",
        left: `${position * 2}%`,
        right: "auto",
        bottom: "auto",
      };
    }
    // Right side (50-100)
    else if (position < 100) {
      return {
        top: `${(position - 50) * 2}%`,
        left: "auto",
        right: "-2%",
        bottom: "auto",
      };
    }
    // Bottom side (100-150)
    else if (position < 150) {
      return {
        top: "auto",
        left: `${100 - (position - 100) * 2}%`,
        right: "auto",
        bottom: "-2%",
      };
    }
    // Left side (150-200)
    else {
      return {
        top: `${100 - (position - 150) * 2}%`,
        left: "0%",
        right: "auto",
        bottom: "auto",
      };
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-6 md:p-[2rem] fixed inset-0 bg-[radial-gradient(circle_at_top,#5a0008_0%,#2b0004_60%,#120002_100%)]">
      <div className="relative max-w-[500px] lg:w-1/2 px-3 md:p-[2.5rem] rounded-[24px] border-4 border-[#f6c94c] h-[80vh] bg-linear-to-b from-[#3b0006] to-[#1b0003] shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_60px_rgba(255,215,0,0.25)]">
        <div className="text-center mb-[0.75rem] [text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_18px_rgba(255,215,0,0.9),0_0_32px_rgba(255,140,0,0.8)]">
          <span className="font-pacifico text-6xl text-[#ffe9a9]">Cinema </span>
          {children}
        </div>

        <div className="text-center mt-2 mb-4 mx-auto px-[0.8rem] py-[0.4rem] max-w-[260px] rounded-full bg-linear-to-r from-[#f6c94c] via-[#ffe9a9] to-[#f6c94c] shadow-[0_0_10px_rgba(255,215,0,0.7),0_0_20px_rgba(255,215,0,0.5)]">
          <span className="font-800 font-[0.85rem] text-[#5a0008] tracking-[0.18em]">
            YOUR AI MOVIE ASSISTANT
          </span>
        </div>


        <div className="mx-auto mt-3 py-5 px-6 bg-[#fdfdfd] rounded-xl shadow-[inset_0_0_0_2px_#e0e0e0,0_0_12px_rgba(0,0,0,0.4)]">
          <div className="h-[1.4rem] mb-[0.4rem] border-b-[#d0d0d0] border-b-2" />
          <div className="h-[1.4rem] mb-[0.4rem] border-b-[#d0d0d0] border-b-2" />
          <div className="h-[1.4rem] mb-[0.4rem] border-b-[#d0d0d0] border-b-2" />
          <div className="h-[1.4rem] mb-[0.4rem] border-b-[#d0d0d0] border-b-2" />
        </div>

        {/* Light bulbs */}
        <div className="absolute inset-[-28px] pointer-events-none">
          {Array.from({ length: bulbCount }).map((_, i) => {
            const position = getBulbPosition(i, bulbCount);
            return (
              <span
                key={i}
                className="absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_30%_30%,hsl(45_100%_85%)_0%,hsl(45_100%_65%)_50%,hsl(45_80%_50%)_100%)] shadow-[0_0_8px_hsl(45_100%_70%),0_0_16px_hsl(45_100%_60%/0.5)] animate-bulb"
                style={{
                  top: position.top,
                  left: position.left,
                  right: position.right,
                  bottom: position.bottom,
                  animationDelay: `${(i / bulbCount) * 1.5}s`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
