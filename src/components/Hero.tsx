import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start bg-slate-900 text-white overflow-hidden pt-8"
    >
      {/* Spline (Desktop) or Static Image (Mobile) */}
      <div className="relative w-full overflow-hidden">
        {/* Desktop Spline */}
        <div className="hidden sm:block sm:h-[500px] md:h-[600px]">
          <div className="spline-wrapper w-full h-full scale-[1] origin-center">
            <Spline scene="/assets/scene.splinecode" />
          </div>
        </div>

        {/* Mobile Static Image */}
        <div className="block sm:hidden w-full aspect-square">
          <img
            src="/assets/spline-fallback.png"
            alt="Robotics Society Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-1rem] sm:mt-[-2rem]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent break-words text-center">
          Robotics & Innovation Society
        </h1>

        <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-300 mb-2">
          Faculty of Technology, Delhi University
        </h2>

        <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
          Advanced Architecture | Intelligent Design
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-medium group"
          >
            Join Our Society
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg font-medium"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};