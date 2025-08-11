import React, { useState } from "react";

export default function GlowCard({ eventData, children, className = "" }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Calculate if mouse is near border (within 50px)
  const getBorderGlow = () => {
    if (!isHovered) return "";

    const { x, y } = mousePosition;
    const glowIntensity = 0.3;

    return `
      0 0 20px rgba(59, 130, 246, ${glowIntensity}),
      0 0 40px rgba(59, 130, 246, ${glowIntensity * 0.5}),
      inset 0 0 60px rgba(59, 130, 246, ${glowIntensity * 0.2})
    `;
  };

  const IconComponent = eventData.icon;

  return (
    <div
      className={`relative h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: isHovered ? getBorderGlow() : "none",
        background: isHovered
          ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
          : "rgba(17, 24, 39, 0.5)",
      }}
    >
      {/* Inner glow effect */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`,
            pointerEvents: "none",
          }}
        />
      )}

      <div className="mb-6">
        <IconComponent
          size={32}
          className="text-white/60 transition-colors duration-300 group-hover:text-[#00f2ff]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {eventData.title && (
          <h3 className="mb-3 text-xl font-semibold text-white">
            {eventData.title}
          </h3>
        )}
        {eventData.description && (
          <p className="mb-4 leading-relaxed text-gray-400">
            {eventData.description}
          </p>
        )}
        {children}
      </div>

      {/* Border highlight effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl border border-blue-500/30"
          style={{
            boxShadow: `inset 0 0 20px rgba(59, 130, 246, 0.1)`,
          }}
        />
      )}
    </div>
  );
}
