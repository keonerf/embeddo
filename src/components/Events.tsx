
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

export const Events = () => {
  const events = [
    {
      title: "Robotics Workshop 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Faculty of Technology, Delhi University, North Campus, New Delhi",
      type: "Workshop",
      description: "Hands-on workshop covering Arduino programming, sensor integration, and basic robotics concepts."
    },
    {
      title: "Tech Fest Competition",
      date: "April 20, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Engineering Block",
      type: "Competition",
      description: "Annual robotics competition featuring line-following, sumo bot, and innovative project categories."
    },
    {
      title: "Guest Lecture: AI in Robotics",
      date: "May 10, 2024",
      time: "2:00 PM - 3:30 PM",
      location: "Auditorium Hall",
      type: "Lecture",
      description: "Industry expert discussing the integration of artificial intelligence in modern robotics applications."
    }
  ];

  return (
    <section id="events" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for exciting workshops, competitions, and learning opportunities throughout the academic year.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <Card key={index} className="bg-slate-700 border-slate-600 hover:border-cyan-400 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <CardTitle className="text-white mb-2 md:mb-0">{event.title}</CardTitle>
                  <Badge 
                    variant="outline" 
                    className={`border-cyan-400 text-cyan-400 self-start md:self-center ${
                      event.type === "Workshop" ? "bg-cyan-400/10" :
                      event.type === "Competition" ? "bg-orange-400/10 border-orange-400 text-orange-400" :
                      "bg-blue-400/10 border-blue-400 text-blue-400"
                    }`}
                  >
                    {event.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-300">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
