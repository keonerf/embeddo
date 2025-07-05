
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interested in joining our society or collaborating on projects? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Address</h4>
                    <p className="text-gray-300">Faculty of Technology, Delhi University<br />Netaji Subhas Institute of Technology<br />New Delhi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-300">+91 11 2569 4021</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-300">robotics@fotdu.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Office Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-cyan-600 to-blue-600 border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Join Our Community</h3>
                <p className="text-blue-100 mb-4">Follow us on social media for updates and announcements</p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
                    Instagram
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-700 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input className="bg-slate-600 border-slate-500 text-white" placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input className="bg-slate-600 border-slate-500 text-white" placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input type="email" className="bg-slate-600 border-slate-500 text-white" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <Input className="bg-slate-600 border-slate-500 text-white" placeholder="What's this about?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea 
                    className="bg-slate-600 border-slate-500 text-white min-h-[120px]" 
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
