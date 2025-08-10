"use client";

import React, { useEffect, useState, useRef } from "react";

const SponsorsMarquee = () => {
  const [scrollDirection, setScrollDirection] = useState("right");
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);
  const directionChangeDelay = useRef(null);

  // Sample sponsor logos - you can replace these with actual sponsor images
  const sponsors = [
    { id: 1, name: "Tech Corp", logo: "/gateways.png" },
    { id: 2, name: "Innovation Labs", logo: "/techOlympus.png" },
    { id: 3, name: "Digital Solutions", logo: "/gateways.png" },
    { id: 4, name: "Future Tech", logo: "/techOlympus.png" },
    { id: 5, name: "Code Masters", logo: "/gateways.png" },
    { id: 6, name: "AI Dynamics", logo: "/techOlympus.png" },
    { id: 7, name: "Cyber Systems", logo: "/gateways.png" },
    { id: 8, name: "Data Flow", logo: "/techOlympus.png" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);

      // Only change direction if scroll difference is significant (reduces quick jumps)
      if (scrollDiff > 5) {
        // Clear any existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Clear any existing direction change delay
        if (directionChangeDelay.current) {
          clearTimeout(directionChangeDelay.current);
        }

        const newDirection =
          currentScrollY > lastScrollY.current ? "left" : "right";

        // Add a small delay before changing direction to smooth out quick changes
        directionChangeDelay.current = setTimeout(() => {
          setScrollDirection(newDirection);
        }, 150);

        // Set a timeout to stop changing direction after scroll stops
        scrollTimeout.current = setTimeout(() => {
          lastScrollY.current = currentScrollY;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (directionChangeDelay.current)
        clearTimeout(directionChangeDelay.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-10 left-10 h-12 w-12 rotate-45 transform animate-pulse border-2 border-[#D4FF00]/30"></div>
      <div className="absolute top-20 right-20 h-8 w-8 -rotate-12 transform border-2 border-[#D4FF00]/20"></div>
      <div className="absolute bottom-10 left-20 h-16 w-16 rotate-12 transform border-2 border-[#D4FF00]/25"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="relative inline-block">
            <div className="absolute -top-3 -left-3 h-6 w-6 border-t-2 border-l-2 border-[#D4FF00] opacity-70"></div>
            <h2 className="font-mono text-3xl font-bold tracking-wider text-[#D4FF00] drop-shadow-[0_0_15px_#D4FF00] md:text-5xl">
              SPONSORS
            </h2>
            <div className="absolute -right-3 -bottom-3 h-6 w-6 border-r-2 border-b-2 border-[#D4FF00] opacity-70"></div>
          </div>

          <div className="mx-auto mt-4 max-w-2xl">
            <p className="font-mono text-sm text-gray-300 md:text-base">
              &gt; POWERED BY INDUSTRY LEADERS
            </p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l from-black via-black/80 to-transparent"></div>

          {/* Marquee Track */}
          <div className="overflow-hidden py-8">
            <div
              className={`flex space-x-8 ${
                scrollDirection === "left"
                  ? "animate-marquee-left"
                  : "animate-marquee-right"
              }`}
              style={{
                width: "calc(200% + 2rem)",
              }}
            >
              {/* First set of sponsors */}
              {sponsors.map((sponsor) => (
                <div
                  key={`first-${sponsor.id}`}
                  className="group relative flex-shrink-0"
                >
                  <div className="relative h-24 w-32 border-2 border-[#D4FF00]/30 bg-black/80 backdrop-blur-sm transition-all duration-300 group-hover:border-[#D4FF00] group-hover:shadow-[0_0_20px_#D4FF00] md:h-28 md:w-40">
                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[#D4FF00]"></div>
                    <div className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-[#D4FF00]"></div>
                    <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#D4FF00]"></div>
                    <div className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-[#D4FF00]"></div>

                    {/* Logo */}
                    <div className="absolute inset-2 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#D4FF00]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {sponsors.map((sponsor) => (
                <div
                  key={`second-${sponsor.id}`}
                  className="group relative flex-shrink-0"
                >
                  <div className="relative h-24 w-32 border-2 border-[#D4FF00]/30 bg-black/80 backdrop-blur-sm transition-all duration-300 group-hover:border-[#D4FF00] group-hover:shadow-[0_0_20px_#D4FF00] md:h-28 md:w-40">
                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[#D4FF00]"></div>
                    <div className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-[#D4FF00]"></div>
                    <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#D4FF00]"></div>
                    <div className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-[#D4FF00]"></div>

                    {/* Logo */}
                    <div className="absolute inset-2 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#D4FF00]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-8 text-center">
          <div className="inline-block border border-[#D4FF00]/30 bg-black/80 px-6 py-2">
            <div className="flex items-center space-x-4">
              <span className="font-mono text-sm text-[#D4FF00]">
                &gt; SCROLL_DIRECTION:
              </span>
              <span className="font-mono text-sm text-white uppercase">
                {scrollDirection}
              </span>
              <div className="h-2 w-2 animate-pulse bg-[#D4FF00]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#D4FF00]/5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-[#D4FF00]/10 blur-2xl"></div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SponsorsMarquee;
