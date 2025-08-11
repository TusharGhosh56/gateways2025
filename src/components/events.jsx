"use client";

import React from "react";
import {
  Code,
  Shield,
  Zap,
  Wifi,
  Brain,
  Palette,
  Gamepad2,
  Users,
  Camera,
  Gift,
  Map,
} from "lucide-react";
import GlowCard from "./glowCard";
import { motion } from "framer-motion";

const eventsData = [
  {
    title: "Coding Debugging",
    description:
      "Debug complex algorithms and solve challenging coding problems to test your programming skills.",
    icon: Code,
  },
  {
    title: "Capture The Flag",
    description:
      "Cybersecurity challenges involving cryptography, reverse engineering, and vulnerability exploitation.",
    icon: Shield,
  },
  {
    title: "Hackathon",
    description:
      "48-hour coding marathon to build innovative solutions and showcase your development expertise.",
    icon: Zap,
  },
  {
    title: "IOT",
    description:
      "Internet of Things challenges combining hardware programming with creative software solutions.",
    icon: Wifi,
  },
  {
    title: "IT Quiz",
    description:
      "Test your knowledge across various IT domains including networking, databases, and emerging technologies.",
    icon: Brain,
  },
  {
    title: "UI/UX",
    description:
      "Design beautiful and intuitive user interfaces while creating exceptional user experiences.",
    icon: Palette,
  },
  {
    title: "Gaming",
    description:
      "Competitive esports tournaments featuring popular games and strategic gaming challenges.",
    icon: Gamepad2,
  },
  {
    title: "It Manager",
    description:
      "Leadership simulation challenges focusing on project management and team coordination skills.",
    icon: Users,
  },
  {
    title: "Photography",
    description:
      "Capture stunning moments and showcase your creative vision through the lens of photography.",
    icon: Camera,
  },
  {
    title: "Surprise Event",
    description:
      "Mystery challenge with unknown format - be prepared for anything and showcase your adaptability.",
    icon: Gift,
  },
  {
    title: "Treasure Hunt",
    description:
      "Adventure-based problem solving with clues, puzzles, and exploration challenges.",
    icon: Map,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Events = () => {
  return (
    <section className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        {/* Simple, Impactful Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-white md:text-7xl">Events</h1>
        </div>

        {/* Clean Grid Layout */}
        <motion.div
          variants={container}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {eventsData.map((event, index) => {
            const IconComponent = event.icon;

            return (
              <motion.div key={index} variants={item}>
                <GlowCard eventData={event} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
