
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Events } from "@/components/Events";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
