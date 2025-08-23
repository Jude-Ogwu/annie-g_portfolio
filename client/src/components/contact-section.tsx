import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Linkedin, Instagram, Twitter, GraduationCap, Globe, Users, Send, Download, FileText } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on transformative initiatives? Let's explore how we can create lasting impact together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    data-testid="input-first-name"
                  />
                  <Input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    data-testid="input-last-name"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  data-testid="input-email"
                />
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                  data-testid="input-subject"
                />
                <Textarea
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  data-testid="textarea-message"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-zim-green to-zim-gold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information & Links */}
            <div className="space-y-8">
              {/* Professional Links */}
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-bold mb-4">Professional Networks</h4>
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                    data-testid="link-linkedin"
                  >
                    <Linkedin className="text-2xl text-blue-600 mr-4 group-hover:scale-110 transition-transform" size={32} />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Professional networking</div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors group"
                    data-testid="link-instagram"
                  >
                    <Instagram className="text-2xl text-pink-600 mr-4 group-hover:scale-110 transition-transform" size={32} />
                    <div>
                      <div className="font-medium">Instagram</div>
                      <div className="text-sm text-muted-foreground">Behind the scenes</div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                    data-testid="link-twitter"
                  >
                    <Twitter className="text-2xl text-blue-400 mr-4 group-hover:scale-110 transition-transform" size={32} />
                    <div>
                      <div className="font-medium">Twitter</div>
                      <div className="text-sm text-muted-foreground">Thought leadership</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Organization Links */}
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-bold mb-4">Organizations</h4>
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors group"
                    data-testid="link-marine-foundation"
                  >
                    <GraduationCap className="text-2xl text-zim-green mr-4 group-hover:scale-110 transition-transform" size={32} />
                    <div>
                      <div className="font-medium">Marine Foundation</div>
                      <div className="text-sm text-muted-foreground">Education innovation</div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors group"
                    data-testid="link-mpowa"
                  >
                    <Globe className="text-2xl text-zim-gold mr-4 group-hover:scale-110 transition-transform" size={32} />
                    <div>
                      <div className="font-medium">Mpowa.io</div>
                      <div className="text-sm text-muted-foreground">Blockchain & Web3</div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors group"
                    data-testid="link-1gen"
                  >
                    <Users className="text-2xl text-zim-red mr-4 group-hover:scale-110 transition-transform" size={32} />
                    <div>
                      <div className="font-medium">1gen.io</div>
                      <div className="text-sm text-muted-foreground">Youth empowerment</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Download Resume */}
              <div className="bg-gradient-to-br from-zim-green to-zim-gold rounded-lg p-6 text-white text-center">
                <Download className="text-3xl mb-4 mx-auto" size={48} />
                <h4 className="text-xl font-bold mb-2">Professional Resume</h4>
                <p className="mb-4 opacity-90">Download my comprehensive CV for detailed information</p>
                <Button 
                  className="bg-white text-zim-green hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    // Create a downloadable PDF resume
                    const link = document.createElement('a');
                    link.href = '#'; // Would be replaced with actual PDF URL
                    link.download = 'Annie-Gonyora-Resume.pdf';
                    link.click();
                  }}
                  data-testid="button-download-resume"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
