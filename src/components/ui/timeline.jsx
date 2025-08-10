"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="relative w-full overflow-hidden bg-black font-mono md:px-10"
      ref={containerRef}
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-20 h-16 w-16 rotate-45 transform animate-pulse border-2 border-[#D4FF00]/30"></div>
      <div className="absolute top-40 right-32 h-12 w-12 -rotate-12 transform border-2 border-[#D4FF00]/20"></div>
      <div className="absolute bottom-32 left-16 h-20 w-20 rotate-12 transform border-2 border-[#D4FF00]/25"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-10">
        {/* Cyberpunk Header */}
        <div className="relative mb-16">
          <div className="absolute -top-4 -left-4 h-8 w-8 border-t-4 border-l-4 border-[#D4FF00] opacity-70"></div>
          <h2 className="mb-4 font-mono text-3xl font-bold tracking-wider text-white md:text-5xl">
            How to
            <span className="ml-4 animate-pulse text-[#D4FF00] drop-shadow-[0_0_15px_#D4FF00]">
              Register
            </span>
          </h2>
          <div className="absolute -right-4 -bottom-4 h-8 w-8 border-r-4 border-b-4 border-[#D4FF00] opacity-70"></div>

          {/* Description with cyberpunk styling */}
          <div className="relative mt-8 max-w-2xl border border-[#D4FF00]/50 bg-black/80 p-6 backdrop-blur-sm">
            <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#D4FF00]"></div>
            <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#D4FF00]"></div>
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#D4FF00]"></div>
            <div className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-[#D4FF00]"></div>

            <p className="font-mono text-sm text-[#D4FF00]/80 md:text-base">
              &gt; Participate in any number of events for ₹150/-
            </p>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              {/* Cyberpunk Timeline Node */}
              <div className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-none border-2 border-[#D4FF00] bg-black shadow-[0_0_20px_#D4FF00] md:left-3">
                {/* Animated dot in center */}
                <div className="h-4 w-4 animate-pulse bg-[#D4FF00]"></div>

                {/* Corner tech elements */}
                <div className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-[#D4FF00]"></div>
                <div className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-[#D4FF00]"></div>
                <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[#D4FF00]"></div>
                <div className="absolute -right-1 -bottom-1 h-3 w-3 border-r-2 border-b-2 border-[#D4FF00]"></div>
              </div>

              {/* Title with cyberpunk styling */}
              <h3 className="hidden font-mono text-xl font-bold tracking-wider text-[#D4FF00] drop-shadow-[0_0_10px_#D4FF00] md:block md:pl-20 md:text-4xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pr-4 pl-20 md:pl-4">
              {/* Mobile title */}
              <h3 className="mb-4 block text-left font-mono text-2xl font-bold tracking-wider text-[#D4FF00] drop-shadow-[0_0_10px_#D4FF00] md:hidden">
                {item.title}
              </h3>

              {/* Content container with cyberpunk styling */}
              <div className="relative border border-[#D4FF00]/30 bg-gray-900/80 p-6 backdrop-blur-sm">
                {/* Glitch effect border */}
                <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 transform border border-[#D4FF00]/20"></div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[#D4FF00]"></div>
                <div className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-[#D4FF00]"></div>
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#D4FF00]"></div>
                <div className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-[#D4FF00]"></div>

                {/* Status indicator */}
                <div className="absolute top-2 right-2 flex space-x-1">
                  <div className="h-2 w-2 animate-ping bg-[#D4FF00]"></div>
                  <div className="h-2 w-2 bg-[#D4FF00]/50"></div>
                  <div className="h-2 w-2 bg-[#D4FF00]/30"></div>
                </div>

                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Cyberpunk Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute top-0 left-8 w-[3px] overflow-hidden bg-gradient-to-b from-transparent via-[#D4FF00]/10 to-transparent md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-[#D4FF00] via-[#D4FF00]/80 to-transparent shadow-[0_0_10px_#D4FF00]"
          />
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#D4FF00]/5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[#D4FF00]/10 blur-2xl"></div>
    </div>
  );
};
