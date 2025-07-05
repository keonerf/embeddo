
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Lightbulb } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To foster innovation in robotics and embedded systems while providing hands-on learning experiences."
    },
    {
      icon: Users,
      title: "Community",
      description: "A diverse group of students passionate about technology, automation, and engineering excellence."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Recognized for outstanding projects and contributions to the field of robotics and embedded systems."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with creative solutions and cutting-edge technology implementations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Our Society
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Robotics and Embedded Systems Society at Faculty of Technology, Delhi University, 
            is dedicated to advancing knowledge and practical skills in robotics, automation, 
            and embedded system design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-700 border-slate-600 hover:border-cyan-400 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <feature.icon className="h-12 w-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg p-8 border border-slate-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Design and build autonomous robots
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Develop embedded system solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Organize workshops and technical events
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Participate in national competitions
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-slate-600 rounded-lg p-6 border border-slate-500">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
