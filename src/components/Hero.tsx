
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Cog } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-lg rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 border border-teal-400 rounded-lg rotate-12"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 text-cyan-400">
            <Zap className="h-12 w-12 animate-pulse" />
            <Code className="h-12 w-12 animate-pulse delay-100" />
            <Cog className="h-12 w-12 animate-pulse delay-200" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
          Robotics & Embedded Systems Society
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
          Faculty of Technology, Delhi University
        </h2>
        
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
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
