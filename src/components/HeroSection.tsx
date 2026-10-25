import RetroWindow from "./RetroWindow";
import { FileText, User, Terminal, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-8 px-4">
      <RetroWindow title="Welcome.exe" className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile Picture Area */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 border-2 border-foreground bg-secondary flex items-center justify-center">
              <User size={64} className="text-muted-foreground" />
            </div>
            <div className="text-center mt-2 text-xs font-bold uppercase">
              Profile.bmp
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-4">
            <div className="font-retro text-4xl md:text-5xl">
              Hello. I'm <span className="border-b-2 border-foreground">[Your Name]</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Terminal size={16} />
              <span className="font-mono text-sm">
                Cybersecurity & Digital Forensics Student
              </span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield size={16} />
              <span className="font-mono text-sm">
                Security Researcher | CTF Player | Linux Enthusiast
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#"
                className="retro-btn retro-btn-primary inline-flex items-center gap-2"
              >
                <FileText size={14} />
                Download Resume.pdf
              </a>
              <a href="#about" className="retro-btn">
                About Me
              </a>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 pt-4 border-t-2 border-foreground">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="border border-foreground p-3">
              <div className="font-retro text-2xl">15+</div>
              <div className="text-xs uppercase text-muted-foreground">Projects</div>
            </div>
            <div className="border border-foreground p-3">
              <div className="font-retro text-2xl">50+</div>
              <div className="text-xs uppercase text-muted-foreground">CTF Challenges</div>
            </div>
            <div className="border border-foreground p-3">
              <div className="font-retro text-2xl">5+</div>
              <div className="text-xs uppercase text-muted-foreground">Certifications</div>
            </div>
            <div className="border border-foreground p-3">
              <div className="font-retro text-2xl">∞</div>
              <div className="text-xs uppercase text-muted-foreground">Coffee Cups</div>
            </div>
          </div>
        </div>
      </RetroWindow>

      {/* Quick Links Panel */}
      <div className="max-w-4xl mx-auto mt-6">
        <div className="border-2 border-foreground bg-card p-4">
          <div className="text-xs uppercase font-bold mb-3 text-muted-foreground">
            :: Quick Navigation ::
          </div>
          <div className="flex flex-wrap gap-2">
            {["About", "Projects", "Skills", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="retro-btn text-xs"
              >
                [{link}]
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
