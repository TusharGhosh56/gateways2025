import React from "react";

const Gateways = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Glowing Border Elements */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#D4FF00] opacity-80"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#D4FF00] opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-[#D4FF00] opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#D4FF00] opacity-80"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="relative block lg:hidden">
            <h1 className="text-6xl lg:text-7xl font-bold text-white font-mono tracking-wider">
              GATE
              <span className="text-[#D4FF00] drop-shadow-[0_0_10px_#D4FF00]">
                WAYS
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-[#D4FF00] to-transparent"></div>
          </div>
          {/* Image Section */}
          <div className="relative group 2xl:p-16">
            {/* Outer Cyberpunk Frame */}
            <div className="relative">
              {/* Animated Border Effect */}
              <div className="absolute inset-0 border-4 border-[#D4FF00] animate-pulse"></div>
              <div className="absolute inset-0 border-4 border-[#D4FF00]/50 transform scale-105"></div>

              {/* Corner Tech Elements */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-black border-2 border-[#D4FF00] flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-[#D4FF00] animate-ping"></div>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-black border-2 border-[#D4FF00] flex items-center justify-center z-10">
                <div
                  className="w-2 h-2 bg-[#D4FF00] animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-black border-2 border-[#D4FF00] flex items-center justify-center z-10">
                <div
                  className="w-2 h-2 bg-[#D4FF00] animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-black border-2 border-[#D4FF00] flex items-center justify-center z-10">
                <div
                  className="w-2 h-2 bg-[#D4FF00] animate-ping"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Actual Gateways Image */}
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
                <img
                  src="/gateways.png"
                  alt="Gateways Tech Fest"
                  className="w-full h-full object-cover opacity-80 hover:opacity-95 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Floating Geometric Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border border-[#D4FF00]/30 transform rotate-45 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-[#D4FF00]/50 transform -rotate-12"></div>
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            {/* Header with Cyberpunk Styling */}
            <div className="relative hidden lg:block">
              <h1 className="text-6xl lg:text-7xl font-bold text-white font-mono tracking-wider">
                GATE
                <span className="text-[#D4FF00] drop-shadow-[0_0_10px_#D4FF00]">
                  WAYS
                </span>
              </h1>
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-[#D4FF00] to-transparent"></div>
            </div>

            {/* Cyberpunk Text Box */}
            <div className="relative bg-gray-900/80 border border-[#D4FF00]/50 p-8 backdrop-blur-sm">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#D4FF00]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#D4FF00]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#D4FF00]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#D4FF00]"></div>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed font-mono">
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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4FF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4FF00]/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Gateways;
