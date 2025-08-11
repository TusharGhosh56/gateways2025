import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gateways from "@/components/gateways";
import RegistrationProcessV2 from "@/components/registrationProcessV2";
import SponsorsMarquee from "@/components/sponsorsMarquee";
import TechOlympus from "@/components/techOlympus";

import Events from "@/components/events";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <Gateways />
      <TechOlympus />
      <RegistrationProcessV2 />
      <Contact />
      <Footer />
      <SponsorsMarquee />

      <Events />
    </div>
  );
}
