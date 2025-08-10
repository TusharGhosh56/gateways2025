"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SponsorsMarquee = () => {
  const marqueeRef = useRef(null);
  const duplicateRef = useRef(null);
  const tl = useRef(null);

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
    if (!marqueeRef.current) return;

    const marqueeWidth = marqueeRef.current.offsetWidth;

    // Create simple left-to-right infinite loop animation
    tl.current = gsap.timeline({ repeat: -1 });

    // Start from left side and move right (creating left-to-right visual movement)
    gsap.set([marqueeRef.current, duplicateRef.current], { x: -marqueeWidth });
    tl.current.to([marqueeRef.current, duplicateRef.current], {
      x: 0,
      duration: 30, // Slower animation (increased from 20s to 30s)
      ease: "none",
    });
    return () => {
      if (tl.current) {
        tl.current.kill();
      }
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
            <div className="flex space-x-8" style={{ width: "200%" }}>
              {/* First set of sponsors */}
              <div ref={marqueeRef} className="flex flex-shrink-0 space-x-8">
                {sponsors.map((sponsor) => (
                  <div
                    key={`first-${sponsor.id}`}
                    className="group relative flex-shrink-0"
                  >
                    <div className="relative h-24 w-32 border-2 border-[#D4FF00]/30 bg-black/80 backdrop-blur-sm transition-all duration-300 group-hover:border-[#D4FF00] group-hover:shadow-[0_0_8px_#D4FF00] md:h-28 md:w-40">
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

              {/* Duplicate set for seamless loop */}
              <div ref={duplicateRef} className="flex flex-shrink-0 space-x-8">
                {sponsors.map((sponsor) => (
                  <div
                    key={`second-${sponsor.id}`}
                    className="group relative flex-shrink-0"
                  >
                    <div className="relative h-24 w-32 border-2 border-[#D4FF00]/30 bg-black/80 backdrop-blur-sm transition-all duration-300 group-hover:border-[#D4FF00] group-hover:shadow-[0_0_8px_#D4FF00] md:h-28 md:w-40">
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
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-8 text-center">
          <div className="inline-block border border-[#D4FF00]/30 bg-black/80 px-6 py-2">
            <div className="flex items-center space-x-4">
              <span className="font-mono text-sm text-[#D4FF00]">
                &gt; MARQUEE_STATUS:
              </span>
              <span className="font-mono text-sm text-white uppercase">
                ACTIVE
              </span>
              <div className="h-2 w-2 animate-pulse bg-[#D4FF00]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#D4FF00]/5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-[#D4FF00]/10 blur-2xl"></div>
    </section>
  );
};

export default SponsorsMarquee;
