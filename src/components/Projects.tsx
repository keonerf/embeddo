import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Bot, Cpu, Zap } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Autonomous Line Following Robot",
      description: "Advanced line-following robot with PID control and obstacle avoidance capabilities using Arduino and ultrasonic sensors.",
      technologies: ["Arduino", "C++", "Sensors", "PID Control"],
      icon: Bot,
      status: "Completed"
    },
    {
      title: "IoT Weather Monitoring System",
      description: "Real-time weather monitoring system with cloud connectivity and mobile app integration using ESP32.",
      technologies: ["ESP32", "IoT", "Cloud", "Mobile App"],
      icon: Cpu,
      status: "In Progress"
    },
    {
      title: "Smart Home Automation",
      description: "Complete home automation solution with voice control, smartphone integration, and energy monitoring.",
      technologies: ["Raspberry Pi", "Python", "Voice Control", "IoT"],
      icon: Zap,
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our innovative projects that showcase the practical application of robotics and embedded systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-cyan-400 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="h-8 w-8 text-cyan-400" />
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-green-600" : "bg-orange-600"}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-slate-600 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
