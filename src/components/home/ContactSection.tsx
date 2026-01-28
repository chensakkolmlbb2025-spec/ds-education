import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="ds-section bg-muted">
      <div className="ds-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="ds-heading mb-6">Contact Us</h2>
            <p className="text-muted-foreground mb-8">
              Unhappy on an education issue? DS Education
              facilitates the delivery of learning through guidance.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="font-medium text-primary">Main Office, Jakarta</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-muted-foreground">Phone: +62 817 665 4900 (Jakarta)</p>
                  <p className="text-muted-foreground">Telegram: +855 87741 78 (Cambodia)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-accent mt-1" />
                <p className="text-muted-foreground">WhatsApp: +65 9159 3287 (Singapore)</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-muted-foreground">Location: Front of Central, Poi Pet, KHA-E street, Battang,</p>
                  <p className="text-muted-foreground">Phnom Penh.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1" />
                <p className="text-muted-foreground">Google Map: http://goo.gl, pnid: OEIC</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-ds-gray-light rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7989!2d103.8519!3d1.2897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMjIuOSJOIDEwM8KwNTEnMDYuOCJF!5e0!3m2!1sen!2ssg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DS Education Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="ds-heading mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Leave us a message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background min-h-[150px]"
                />
              </div>
              <Button type="submit" className="ds-btn-primary w-full md:w-auto">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
