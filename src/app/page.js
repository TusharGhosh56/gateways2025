import Gateways from "@/components/gateways";
import TechOlympus from "@/components/techOlympus";
import RegistrationProcessV2 from "@/components/registrationProcessV2";
import SponsorsMarquee from "@/components/sponsorsMarquee";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <Gateways />
      <TechOlympus />
      <RegistrationProcessV2 />
      <SponsorsMarquee />
      <Contact />
      <Footer />
    </div>
  );
}
