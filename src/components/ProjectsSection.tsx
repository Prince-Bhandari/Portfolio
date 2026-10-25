import RetroWindow from "./RetroWindow";
import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      name: "VulnScanner",
      description: "Automated vulnerability scanner for web applications with custom exploit modules.",
      tech: ["Python", "Flask", "SQLite"],
      github: "#",
      demo: "#",
    },
    {
      name: "ForensicKit",
      description: "Digital forensics toolkit for memory analysis and artifact extraction.",
      tech: ["Python", "Volatility", "YARA"],
      github: "#",
    },
    {
      name: "SecureChat",
      description: "End-to-end encrypted messaging application with zero-knowledge architecture.",
      tech: ["React", "Node.js", "WebSocket"],
      github: "#",
      demo: "#",
    },
    {
      name: "CTF-Writeups",
      description: "Collection of detailed writeups for various CTF challenges and competitions.",
      tech: ["Markdown", "Python", "Bash"],
      github: "#",
    },
    {
      name: "NetworkMonitor",
      description: "Real-time network traffic analyzer with anomaly detection capabilities.",
      tech: ["Go", "eBPF", "Grafana"],
      github: "#",
    },
    {
      name: "PasswordManager",
      description: "Secure password manager with hardware key support and local-first design.",
      tech: ["Rust", "SQLCipher", "FIDO2"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-8 px-4">
      <RetroWindow title="Projects_Folder" className="max-w-5xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase font-bold text-muted-foreground border-b border-foreground pb-1">
            <Folder size={14} />
            <span>:: Project Directory ::</span>
            <span className="ml-auto">{projects.length} items</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="border-2 border-foreground bg-card hover:bg-secondary group"
              >
                {/* Window header */}
                <div className="flex items-center gap-2 bg-secondary px-2 py-1 border-b border-foreground">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 border border-foreground bg-foreground" />
                    <div className="w-2 h-2 border border-foreground bg-muted" />
                    <div className="w-2 h-2 border border-foreground bg-background" />
                  </div>
                  <span className="font-bold text-xs uppercase truncate">
                    {project.name}.proj
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <p className="text-sm">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="retro-badge text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2 border-t border-foreground">
                    {project.github && (
                      <a
                        href={project.github}
                        className="retro-btn text-xs flex items-center gap-1"
                      >
                        <Github size={12} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="retro-btn retro-btn-primary text-xs flex items-center gap-1"
                      >
                        <ExternalLink size={12} />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};

export default ProjectsSection;
