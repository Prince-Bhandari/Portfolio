import { useState } from "react";
import RetroWindow from "./RetroWindow";
import { FileText, User, Terminal, Shield } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const NAME = "Prince Bhandari";

// TODO: replace with your real numbers
const stats = [
  { value: "x+", label: "Projects" },
  { value: "y+", label: "CTF Challenges" },
  { value: "z+", label: "Certifications" },
  { value: "∞", label: "Coffee Cups" },
];

const quickLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const HeroSection = () => {
  const [photoOk, setPhotoOk] = useState(true);
  const base = import.meta.env.BASE_URL;

  return (
    <section className="py-8 px-4">
      <RetroWindow title="Welcome.exe" className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile Picture Area */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 border-2 border-foreground bg-secondary flex items-center justify-center overflow-hidden">
              {photoOk ? (
                <img
                  src={`${base}profile.jpeg`}
                  alt={NAME}
                  className="w-full h-full object-cover "
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <User size={64} className="text-muted-foreground" />
              )}
            </div>
            <div className="text-center mt-2 text-xs font-bold uppercase">Profile.bmp</div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-4">
            <div className="font-retro text-4xl md:text-5xl">
              Hello. I'm <span className="border-b-2 border-foreground">{NAME}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Terminal size={16} />
              <span className="font-mono text-sm">Cybersecurity & Digital Forensics Student</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield size={16} />
              <span className="font-mono text-sm">
                Security Researcher | CTF Player | CEH Certified
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                // href={`${base}Prince-Bhandari.pdf`}
                // download
                onClick={() => alert("Resume not uploaded!")}
                className="retro-btn retro-btn-primary inline-flex items-center gap-2"
              >
                <FileText size={14} />
                Download Resume.pdf
              </a>
              <button type="button" onClick={() => scrollToId("about")} className="retro-btn">
                About Me
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 pt-4 border-t-2 border-foreground">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label} className="border border-foreground p-3">
                <div className="font-retro text-2xl">{s.value}</div>
                <div className="text-xs uppercase text-muted-foreground">{s.label}</div>
              </div>
            ))}
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
            {quickLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToId(link.id)}
                className="retro-btn text-xs"
              >
                [{link.label}]
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;