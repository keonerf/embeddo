import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail } from "lucide-react";

export const Team = () => {
  const team = [
    {
      name: "Soham Nalwade",
      role: "Coordinator",
      department: "Electronics & Communication",
      year: "Second Year",
      avatar: "/placeholder.svg",
      specialties: ["Robotics", "AI", "Leadership"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sohamnalwade@fotdu.ac.in",
      },
    },
    {
      name: "Devansh Parashar",
      role: "Coordinator",
      department: "Electronics & Communication",
      year: "Second Year",
      avatar: "/placeholder.svg",
      specialties: ["Circuit Design", "Automation", "Research"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sneha@fotdu.ac.in",
      },
    },
    {
      name: "Avi Prakash Jaiswal",
      role: "Tech Team",
      department: "Electronics & Communication",
      year: "Second Year",
      avatar: "/placeholder.svg",
      specialties: ["Web Dev", "Deployment", "Programming"],
      social: {
        linkedin: "#",
        github: "#",
        email: "aviprakashjaiswal@fotdu.ac.in",
      },
    },
    {
      name: "Shounak Roy Chowdhury",
      role: "Workshop Mentor",
      department: "Electronics & Communication",
      year: "Second Year",
      avatar: "/placeholder.svg",
      specialties: ["Mechanical Design", "3D Design", "Training"],
      social: {
        linkedin: "#",
        github: "#",
        email: "shounakroychowdhury@fotdu.ac.in",
      },
    },
    {
      name: "Shreya Jaisal",
      role: "Tech Team",
      department: "Electronics & Communication",
      year: "Third Year",
      avatar: "/placeholder.svg",
      specialties: ["Embedded Systems", "Content Update", "Website Management"],
      social: {
        linkedin: "#",
        github: "#",
        email: "shreyajaisal@fotdu.ac.in",
      },
    },
    {
      name: "Aishwarya",
      role: "Tech Team",
      department: "Electronics & Communication",
      year: "Second Year",
      avatar: "/placeholder.svg",
      specialties: ["Programming", "Data Structures", "Problem Solving"],
      social: {
        linkedin: "#",
        github: "#",
        email: "aishwarya@fotdu.ac.in",
      },
    },
    {
      name: "Gouri Dahiya",
      role: "Tech Team",
      department: "Electronics & Communication",
      year: "Second Year",
      avatar: "/placeholder.svg",
      specialties: ["Programming", "Development", "Robotics"],
      social: {
        linkedin: "#",
        github: "#",
        email: "gauridahiya@fotdu.ac.in",
      },
    },
    {
      name: "Shreyas Singh",
      role: "Workshop Mentor",
      department: "Electronics & Communication",
      year: "Third Year",
      avatar: "/placeholder.svg",
      specialties: [
        "Embedded Systems",
        "Workshop Planning",
        "Project Guidance",
      ],
      social: {
        linkedin: "#",
        github: "#",
        email: "shreyassingh@fotdu.ac.in",
      },
    },
    {
      name: "Vaibhav Taneja",
      role: "Workshop Mentor",
      department: "Electrical",
      year: "Third Year",
      avatar: "/placeholder.svg",
      specialties: ["Robotics", "Workshop Mentor"],
      social: {
        linkedin: "#",
        github: "#",
        email: "vaibhavtaneja@fotdu.ac.in"
      },
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation and excellence in
            our robotics society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:border-cyan-400 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-cyan-400">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-slate-700 text-cyan-400 text-lg font-semibold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-1">
                  {member.department}
                </p>
                <p className="text-gray-400 text-sm mb-4">{member.year}</p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.specialties.map((specialty, specIndex) => (
                    <Badge
                      key={specIndex}
                      variant="outline"
                      className="border-slate-600 text-gray-300 text-xs"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
