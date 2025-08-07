import React from "react";

const TechOlympus = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(212,255,0,0.3)_1px,transparent_0)] bg-[size:40px_40px] animate-pulse"></div>
      </div>

      {/* Hexagonal Decorative Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-[#D4FF00]/50 transform rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-12 h-12 border-2 border-[#D4FF00]/30 transform -rotate-12"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 border-2 border-[#D4FF00]/40 transform rotate-12"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          <div className="relative block lg:hidden">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-[#D4FF00] opacity-70"></div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-mono tracking-widest leading-tight">
              TECH
              <br />
              <span className="text-[#D4FF00] drop-shadow-[0_0_15px_#D4FF00] animate-pulse">
                OLYMPUS
              </span>
            </h1>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-[#D4FF00] opacity-70"></div>
          </div>
          {/* Text Section - Left Side */}
          <div className="space-y-10 order-2 lg:order-1">
            {/* Cyberpunk Header */}
            <div className="relative hidden lg:block">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-[#D4FF00] opacity-70"></div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white font-mono tracking-widest leading-tight">
                TECH
                <br />
                <span className="text-[#D4FF00] drop-shadow-[0_0_15px_#D4FF00] animate-pulse">
                  OLYMPUS
                </span>
              </h1>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-[#D4FF00] opacity-70"></div>
            </div>

            {/* Main Text Container */}
            <div className="relative">
              {/* Glitch Effect Border */}
              <div className="absolute inset-0 border-2 border-[#D4FF00]/60 transform translate-x-1 translate-y-1 animate-pulse"></div>
              <div className="relative bg-black/90 border-2 border-[#D4FF00] p-8 backdrop-blur-sm">
                {/* Data Stream Decoration */}
                <div className="absolute top-2 right-2 flex space-x-1">
                  <div className="w-1 h-1 bg-[#D4FF00] rounded-full animate-ping"></div>
                  <div
                    className="w-1 h-1 bg-[#D4FF00] rounded-full animate-ping"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-[#D4FF00] rounded-full animate-ping"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-[#D4FF00] pl-6">
                    <p className="text-gray-300 text-lg leading-relaxed font-mono">
                      Inspired by the grandeur of Greek mythology, Tech Olympus
                      blends ancient myths with modern technology to showcase
                      the timeless power of innovation. Drawing from the
                      legendary pantheon of 12 Greek gods, this year's theme
                      highlights Zeus as the central figure, with each of the
                      other 11 gods representing unique events that celebrate
                      various aspects of technology and computer science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div className="relative group order-1 lg:order-2 2xl:p-16 -mb-[100px]">
            {/* Outer Cyberpunk Frame */}
            <div className="relative">
              {/* Animated Border Effect */}
              <div className="absolute inset-0 border-4 border-[#D4FF00] animate-pulse"></div>
              <div className="absolute inset-0 border-4 border-[#D4FF00]/50 transform scale-105"></div>

              {/* Corner Tech Elements */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-black border-2 border-[#D4FF00] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#D4FF00] animate-ping"></div>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-black border-2 border-[#D4FF00] flex items-center justify-center">
                <div
                  className="w-2 h-2 bg-[#D4FF00] animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-black border-2 border-[#D4FF00] flex items-center justify-center">
                <div
                  className="w-2 h-2 bg-[#D4FF00] animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-black border-2 border-[#D4FF00] flex items-center justify-center">
                <div
                  className="w-2 h-2 bg-[#D4FF00] animate-ping"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Main Image Container */}
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
                {/* Actual TechOlympus Image */}
                <img
                  src="/techOlympus.png"
                  alt="Tech Olympus"
                  className="w-full h-full object-cover opacity-80 hover:opacity-95 transition-opacity duration-300"
                />

                {/* Tech Olympus Title Overlay */}
                {/* <div className="absolute bottom-8 left-8 right-8 text-center bg-black/70 backdrop-blur-sm border border-[#D4FF00]/50 p-4">
                  <div className="text-2xl text-[#D4FF00] font-mono font-bold drop-shadow-[0_0_10px_#D4FF00]">
                    TECH OLYMPUS
                  </div>
                  <div className="text-[#D4FF00] font-mono text-xs tracking-[0.3em] opacity-80 mt-1">
                    DIVINE TECHNOLOGY
                  </div>
                </div> */}
              </div>

              {/* Scanning Line Effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4FF00]/30 to-transparent w-4 group-hover:animate-pulse"></div> */}
            </div>

            {/* Floating Geometric Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border border-[#D4FF00]/30 transform rotate-45 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-[#D4FF00]/50 transform -rotate-12"></div>
          </div>
        </div>
      </div>

      {/* Background Ambient Effects */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4FF00]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4FF00]/3 rounded-full blur-3xl"></div>

      {/* Data Stream Lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4FF00]/50 to-transparent animate-pulse"></div>
      <div
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4FF00]/30 to-transparent animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default TechOlympus;
