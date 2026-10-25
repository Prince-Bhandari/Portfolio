import RetroWindow from "./RetroWindow";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

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
    alert("Message sent! (Demo only)");
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  ];

  return (
    <section id="contact" className="py-8 px-4">
      <RetroWindow title="Contact.exe" className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="space-y-4">
            <div className="text-xs uppercase font-bold text-muted-foreground border-b border-foreground pb-1">
              :: Send a Message ::
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs uppercase mb-1">Name:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-2 border-foreground bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:bg-secondary"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase mb-1">Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border-2 border-foreground bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:bg-secondary"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase mb-1">Message:</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border-2 border-foreground bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:bg-secondary min-h-[120px] resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="retro-btn retro-btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="text-xs uppercase font-bold text-muted-foreground border-b border-foreground pb-1">
              :: Connect ::
            </div>

            <div className="bg-secondary p-4 border border-foreground font-mono text-sm">
              <div className="text-muted-foreground mb-2">$ whoami</div>
              <div className="space-y-1">
                <div>name: [Your Name]</div>
                <div>role: Security Student</div>
                <div>location: Earth, Sol System</div>
                <div>status: Open to opportunities</div>
              </div>
            </div>

            <div className="space-y-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 border border-foreground p-3 hover:bg-foreground hover:text-background group"
                >
                  <Icon size={18} />
                  <span className="font-bold text-sm uppercase">{label}</span>
                  <span className="ml-auto text-xs text-muted-foreground group-hover:text-background">
                    →
                  </span>
                </a>
              ))}
            </div>

            <div className="border border-foreground p-3 text-center">
              <div className="text-xs text-muted-foreground mb-1">
                Response Time
              </div>
              <div className="font-retro text-lg">{"< 24 hours"}</div>
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};

export default ContactSection;
