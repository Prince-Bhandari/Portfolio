import RetroWindow from "./RetroWindow";
import { Code, Wrench, Shield, Server } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Code;
  skills: string[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "JavaScript/TypeScript", "Go", "Rust", "Bash", "C/C++", "SQL"],
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["React", "Node.js", "Flask", "Docker", "Git", "Linux", "Neovim"],
    },
    {
      title: "Security Tools",
      icon: Shield,
      skills: ["Burp Suite", "Wireshark", "Metasploit", "Nmap", "Ghidra", "YARA", "Volatility"],
    },
    {
      title: "Infrastructure",
      icon: Server,
      skills: ["AWS", "Kubernetes", "Terraform", "Nginx", "PostgreSQL", "Redis"],
    },
  ];

  return (
    <section id="skills" className="py-8 px-4">
      <RetroWindow title="Skills.sys" className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="text-xs uppercase font-bold text-muted-foreground border-b border-foreground pb-1">
            :: Technical Proficiencies ::
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="border border-foreground">
                  {/* Category header */}
                  <div className="bg-secondary px-3 py-2 border-b border-foreground flex items-center gap-2">
                    <Icon size={14} />
                    <span className="font-bold text-sm uppercase">
                      {category.title}
                    </span>
                  </div>

                  {/* Skills list */}
                  <div className="p-3">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="border border-foreground px-2 py-1 text-xs font-mono hover:bg-foreground hover:text-background"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terminal skill display */}
          <div className="bg-secondary p-4 border border-foreground font-mono text-xs">
            <div className="text-muted-foreground mb-2">$ skills --list --verbose</div>
            <div className="space-y-1">
              <div>
                <span className="text-muted-foreground">[████████████████████] </span>
                Python .......... Expert
              </div>
              <div>
                <span className="text-muted-foreground">[███████████████░░░░░] </span>
                Web Security .... Advanced
              </div>
              <div>
                <span className="text-muted-foreground">[██████████████░░░░░░] </span>
                Network Analysis  Advanced
              </div>
              <div>
                <span className="text-muted-foreground">[████████████░░░░░░░░] </span>
                Reverse Eng ..... Intermediate
              </div>
              <div>
                <span className="text-muted-foreground">[██████████░░░░░░░░░░] </span>
                Cloud Security .. Intermediate
              </div>
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};

export default SkillsSection;
