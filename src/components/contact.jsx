import React from "react";

const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-20 h-16 w-16 rotate-45 transform animate-pulse border-2 border-[#D4FF00]/30"></div>
      <div className="absolute top-40 right-32 h-12 w-12 -rotate-12 transform border-2 border-[#D4FF00]/20"></div>
      <div className="absolute bottom-32 left-16 h-20 w-20 rotate-12 transform border-2 border-[#D4FF00]/25"></div>

      {/* Smoke/Abstract Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-transparent via-gray-800/20 to-gray-900/40"></div>
      </div>

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -top-4 -left-4 h-8 w-8 border-t-4 border-l-4 border-[#D4FF00] opacity-70"></div>
            <h1 className="font-mono text-5xl font-bold tracking-wider text-[#D4FF00] drop-shadow-[0_0_10px_#D4FF00] md:text-7xl">
              Contact
            </h1>
            <div className="absolute -right-4 -bottom-4 h-8 w-8 border-r-4 border-b-4 border-[#D4FF00] opacity-70"></div>
          </div>

          <div className="mt-8">
            <p className="font-mono text-lg text-white md:text-xl">
              For any queries regarding the fest
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Mohit Contact Card */}
          <div className="group relative">
            {/* Glitch Effect Border */}
            <div className="absolute inset-0 translate-x-1 translate-y-1 transform border-2 border-[#D4FF00]/60 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="relative overflow-hidden border-2 border-[#D4FF00] bg-black/90 backdrop-blur-sm">
              {/* Name Section */}
              <div className="bg-[#D4FF00] px-10 py-4">
                <h3 className="font-mono text-xl font-bold text-black md:text-2xl">
                  Mohit
                </h3>
              </div>

              {/* Phone Section */}
              <div className="border-t border-[#D4FF00]/30 bg-black/80 px-6 py-4">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm text-[#D4FF00]">&gt;</span>
                  <span className="font-mono text-lg tracking-wider text-white md:text-xl">
                    8921893291
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sharanya Contact Card */}
          <div className="group relative">
            {/* Glitch Effect Border */}
            <div className="absolute inset-0 translate-x-1 translate-y-1 transform border-2 border-[#D4FF00]/60 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="relative overflow-hidden border-2 border-[#D4FF00] bg-black/90 backdrop-blur-sm">
              {/* Name Section */}
              <div className="bg-[#D4FF00] px-10 py-4">
                <h3 className="font-mono text-xl font-bold text-black md:text-2xl">
                  Sharanya
                </h3>
              </div>

              {/* Phone Section */}
              <div className="border-t border-[#D4FF00]/30 bg-black/80 px-6 py-4">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-sm text-[#D4FF00]">&gt;</span>
                  <span className="font-mono text-lg tracking-wider text-white md:text-xl">
                    9686224079
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Brochure Button */}
        <div className="mt-16 text-center">
          <div className="group relative inline-block">
            {/* Glitch Effect */}
            <div className="absolute inset-0 transform border-2 border-[#D4FF00]/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>

            <button className="relative border-2 border-[#D4FF00] bg-black px-8 py-4 font-mono text-lg text-white transition-colors duration-300 hover:bg-[#D4FF00]/10">
              {/* Corner tech elements */}
              <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[#D4FF00]"></div>
              <div className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-[#D4FF00]"></div>
              <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#D4FF00]"></div>
              <div className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-[#D4FF00]"></div>
              <span className="mr-2 text-[#D4FF00]">&gt;</span>
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#C8860D]/5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[#D4FF00]/10 blur-2xl"></div>
    </section>
  );
};

export default Contact;
