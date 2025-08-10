import React from "react";

const Gateways = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Glowing Border Elements */}
      <div className="absolute top-0 left-0 h-20 w-20 border-t-2 border-l-2 border-[#D4FF00] opacity-80"></div>
      <div className="absolute top-0 right-0 h-20 w-20 border-t-2 border-r-2 border-[#D4FF00] opacity-80"></div>
      <div className="absolute bottom-0 left-0 h-20 w-20 border-b-2 border-l-2 border-[#D4FF00] opacity-80"></div>
      <div className="absolute right-0 bottom-0 h-20 w-20 border-r-2 border-b-2 border-[#D4FF00] opacity-80"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-2">
          <div className="relative block lg:hidden">
            <h1 className="font-mono text-6xl font-bold tracking-wider text-white lg:text-7xl">
              GATE
              <span className="text-[#D4FF00] drop-shadow-[0_0_10px_#D4FF00]">
                WAYS
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 h-1 w-32 bg-gradient-to-r from-[#D4FF00] to-transparent"></div>
          </div>
          {/* Image Section */}
          <div className="group relative p-4 2xl:p-16">
            {/* Outer Cyberpunk Frame */}
            <div className="relative">
              {/* Animated Border Effect */}
              <div className="absolute inset-0 animate-pulse border-4 border-[#D4FF00]"></div>
              <div className="absolute inset-0 scale-105 transform border-4 border-[#D4FF00]/50"></div>

              {/* Corner Tech Elements */}
              <div className="absolute -top-3 -left-3 z-10 flex h-12 w-12 items-center justify-center border-2 border-[#D4FF00] bg-black">
                <div className="h-2 w-2 animate-ping bg-[#D4FF00]"></div>
              </div>
              <div className="absolute -top-3 -right-3 z-10 flex h-12 w-12 items-center justify-center border-2 border-[#D4FF00] bg-black">
                <div
                  className="h-2 w-2 animate-ping bg-[#D4FF00]"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <div className="absolute -bottom-3 -left-3 z-10 flex h-12 w-12 items-center justify-center border-2 border-[#D4FF00] bg-black">
                <div
                  className="h-2 w-2 animate-ping bg-[#D4FF00]"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <div className="absolute -right-3 -bottom-3 z-10 flex h-12 w-12 items-center justify-center border-2 border-[#D4FF00] bg-black">
                <div
                  className="h-2 w-2 animate-ping bg-[#D4FF00]"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Actual Gateways Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                <img
                  src="/gateways.png"
                  alt="Gateways Tech Fest"
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-95"
                />
              </div>
            </div>

            {/* Floating Geometric Elements */}
            <div className="absolute -top-8 -right-8 h-24 w-24 rotate-45 transform animate-pulse border border-[#D4FF00]/30"></div>
            <div className="absolute -bottom-8 -left-8 h-16 w-16 -rotate-12 transform border border-[#D4FF00]/50"></div>
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            {/* Header with Cyberpunk Styling */}
            <div className="relative hidden lg:block">
              <h1 className="font-mono text-6xl font-bold tracking-wider text-white lg:text-7xl">
                GATE
                <span className="text-[#D4FF00] drop-shadow-[0_0_10px_#D4FF00]">
                  WAYS
                </span>
              </h1>
              <div className="absolute -bottom-2 left-0 h-1 w-32 bg-gradient-to-r from-[#D4FF00] to-transparent"></div>
            </div>

            {/* Cyberpunk Text Box */}
            <div className="relative border border-[#D4FF00]/50 bg-gray-900/80 p-8 backdrop-blur-sm">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#D4FF00]"></div>
              <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#D4FF00]"></div>
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#D4FF00]"></div>
              <div className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-[#D4FF00]"></div>

              <div className="space-y-6">
                <p className="font-mono text-lg leading-relaxed text-gray-300">
                  Gateways is the national technical fest, held annually for
                  over 25 years by the Department of Computer Science at CHRIST
                  (Deemed to be University), Bangalore. Organized by students of
                  the post-graduate MCA (Master of Computer Applications) and
                  MSc AI-ML (Artificial Intelligence and Machine Learning)
                  programs, it aims to be at the forefront of innovation and
                  collaboration, with new ideas and events presented each year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#D4FF00]/5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[#D4FF00]/10 blur-2xl"></div>
    </section>
  );
};

export default Gateways;
