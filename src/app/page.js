import ScrollVideo from "@/components/ScrollVideo";
import ZoomIn from "@/components/zoomin";

export default function Home() {
  return (
    <>
      <ScrollVideo />
      <ZoomIn />
      <div className="h-screen bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white">
        <div className="text-center max-w-2xl px-8">
          <h2 className="text-4xl font-bold mb-6">Buttery Smooth Scrolling</h2>
          <p className="text-lg leading-relaxed">
            Experience the difference with Lenis smooth scroll. Every scroll interaction
            feels natural and responsive, creating an immersive browsing experience.
          </p>
        </div>
      </div>

      <div className="h-screen bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
        <div className="text-center max-w-2xl px-8">
          <h2 className="text-4xl font-bold mb-6">Seamless Integration</h2>
          <p className="text-lg leading-relaxed">
            Lenis works perfectly with GSAP ScrollTrigger, enabling smooth animations
            that respond beautifully to scroll events.
          </p>
        </div>
      </div>

      <div className="h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white">
        <div className="text-center max-w-2xl px-8">
          <h2 className="text-4xl font-bold mb-6">Performance Optimized</h2>
          <p className="text-lg leading-relaxed">
            Built for performance with RAF (RequestAnimationFrame) and optimized
            for both desktop and mobile experiences.
          </p>
        </div>
      </div>
    </>
  );
}
