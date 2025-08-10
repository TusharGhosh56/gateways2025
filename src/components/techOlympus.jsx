import React from "react";

const TechOlympus = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Digital Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_1px_1px,rgba(212,255,0,0.3)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      {/* Hexagonal Decorative Elements */}
      <div className="absolute top-20 left-20 h-16 w-16 rotate-45 transform animate-pulse border-2 border-[#D4FF00]/50"></div>
      <div className="absolute top-40 right-32 h-12 w-12 -rotate-12 transform border-2 border-[#D4FF00]/30"></div>
      <div className="absolute bottom-32 left-16 h-20 w-20 rotate-12 transform border-2 border-[#D4FF00]/40"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid min-h-screen items-center gap-16 lg:grid-cols-2">
          <div className="relative block lg:hidden">
            <div className="absolute -top-4 -left-4 h-8 w-8 border-t-4 border-l-4 border-[#D4FF00] opacity-70"></div>
            <h1 className="font-mono text-5xl leading-tight font-bold tracking-widest text-white lg:text-6xl">
              TECH
              <br />
              <span className="animate-pulse text-[#D4FF00] drop-shadow-[0_0_15px_#D4FF00]">
                OLYMPUS
              </span>
            </h1>
            <div className="absolute -right-4 -bottom-4 h-8 w-8 border-r-4 border-b-4 border-[#D4FF00] opacity-70"></div>
          </div>
          {/* Text Section - Left Side */}
          <div className="order-2 space-y-10 lg:order-1">
            {/* Cyberpunk Header */}
            <div className="relative hidden lg:block">
              <div className="absolute -top-4 -left-4 h-8 w-8 border-t-4 border-l-4 border-[#D4FF00] opacity-70"></div>
              <h1 className="font-mono text-5xl leading-tight font-bold tracking-widest text-white lg:text-6xl">
                TECH
                <br />
                <span className="animate-pulse text-[#D4FF00] drop-shadow-[0_0_15px_#D4FF00]">
                  OLYMPUS
                </span>
              </h1>
              <div className="absolute -right-4 -bottom-4 h-8 w-8 border-r-4 border-b-4 border-[#D4FF00] opacity-70"></div>
            </div>

            {/* Main Text Container */}
            <div className="relative mt-20">
              {/* Glitch Effect Border */}
              <div className="absolute inset-0 translate-x-1 translate-y-1 transform animate-pulse border-2 border-[#D4FF00]/60"></div>
              <div className="relative border-2 border-[#D4FF00] bg-black/90 p-8 backdrop-blur-sm">
                {/* Data Stream Decoration */}
                <div className="absolute top-2 right-2 flex space-x-1">
                  <div className="h-1 w-1 animate-ping rounded-full bg-[#D4FF00]"></div>
                  <div
                    className="h-1 w-1 animate-ping rounded-full bg-[#D4FF00]"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-1 w-1 animate-ping rounded-full bg-[#D4FF00]"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-[#D4FF00] pl-6">
                    <p className="font-mono text-lg leading-relaxed text-gray-300">
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
          <div className="group relative order-1 -mb-[100px] p-4 lg:order-2 2xl:p-16">
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

              {/* Main Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                {/* Actual TechOlympus Image */}
                <img
                  src="/techOlympus.png"
                  alt="Tech Olympus"
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-95"
                />
              </div>
            </div>

            {/* Floating Geometric Elements */}
            <div className="absolute -top-8 -right-8 h-24 w-24 rotate-45 transform animate-pulse border border-[#D4FF00]/30"></div>
            <div className="absolute -bottom-8 -left-8 h-16 w-16 -rotate-12 transform border border-[#D4FF00]/50"></div>
          </div>
        </div>
      </div>

      {/* Background Ambient Effects */}
      <div className="absolute top-0 right-0 h-72 w-72 animate-pulse rounded-full bg-[#D4FF00]/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#D4FF00]/3 blur-3xl"></div>

      {/* Data Stream Lines */}
      <div className="absolute top-1/2 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#D4FF00]/50 to-transparent"></div>
      <div
        className="absolute top-1/3 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#D4FF00]/30 to-transparent"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default TechOlympus;
