import RetroWindow from "./RetroWindow";
import { Terminal, Shield, Flag, Server, Code } from "lucide-react";

const AboutSection = () => {
  const interests = [
    { icon: Shield, label: "Cybersecurity" },
    { icon: Terminal, label: "Digital Forensics" },
    { icon: Flag, label: "CTF Competitions" },
    { icon: Server, label: "Linux Systems" },
    { icon: Code, label: "Web Development" },
  ];

  return (
    <section id="about" className="py-8 px-4">
      <RetroWindow title="About_Me.txt" className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Terminal-style intro */}
          <div className="font-mono text-sm bg-secondary p-4 border border-foreground">
            <div className="text-muted-foreground mb-2">$ cat about.txt</div>
            <div className="space-y-2">
              <p>
                I am a passionate cybersecurity and digital forensics student with a deep
                curiosity for understanding how systems work and how to protect them.
              </p>
              <p>
                My journey in tech started with breaking things (ethically, of course)
                and evolved into a mission to build secure, resilient systems.
              </p>
              <p>
                When I'm not hunting vulnerabilities, you'll find me reading vulnerabilties,
                competing in CTFs, or exploring the latest Linux distributions.
              </p>
            </div>
          </div>

          {/* Interests Grid */}
          <div>
            <div className="text-xs uppercase font-bold mb-3 text-muted-foreground border-b border-foreground pb-1">
              :: Areas of Interest ::
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {interests.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="border border-foreground p-3 text-center hover:bg-secondary"
                >
                  <Icon size={24} className="mx-auto mb-2" />
                  <div className="text-xs font-bold uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="bg-secondary p-4 border border-foreground">
            <div className="text-xs uppercase font-bold mb-2">
              &gt; system.info()
            </div>
            <div className="font-mono text-xs space-y-1 text-muted-foreground">
              <div>OS: Arch Linux (btw)</div>
              <div>Shell: zsh with custom config</div>
              <div>Editor: Neovim</div>
              <div>Keyboard: Mechanical, 60%</div>
              <div>Status: Always learning</div>
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};

export default AboutSection;
