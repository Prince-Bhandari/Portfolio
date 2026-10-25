import RetroWindow from "./RetroWindow";
import { GraduationCap, Briefcase, Award } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "work" | "certification";
}

const TimelineSection = () => {
  const timelineData: TimelineItem[] = [
    // {
    //   year: "2024",
    //   title: "Security Analyst Intern",
    //   organization: "CyberDefense Corp",
    //   description: "Performed vulnerability assessments and incident response.",
    //   type: "work",
    // },
    // {
    //   year: "2024",
    //   title: "CompTIA Security+ Certified",
    //   organization: "CompTIA",
    //   description: "Industry-standard cybersecurity certification.",
    //   type: "certification",
    // },
    {
      year: "2024-2028",
      title: "B.Tech. CSE with Cybersecurity & Digital Forensics",
      organization: "VIT Bhopal University",
      description: "Currently pursuing B.Tech in Computer Science Engineering with a specialization in Cybersecurity & Digital Forensics, focusing on network security and incident response.",
      type: "education",
    },
    // {
    //   year: "2023",
    //   title: "SOC Analyst Intern",
    //   organization: "SecureNet Solutions",
    //   description: "Monitored security events and investigated alerts.",
    //   type: "work",
    // },
    {
      year: "2026",
      title: "CEH Certified",
      organization: "EC-Council",
      description: "Certified Ethical Hacker credential.",
      type: "certification",
    },
  ];

  const getIcon = (type: TimelineItem["type"]) => {
    switch (type) {
      case "education":
        return GraduationCap;
      case "work":
        return Briefcase;
      case "certification":
        return Award;
    }
  };

  return (
    <section id="experience" className="py-8 px-4">
      <RetroWindow title="Timeline.log" className="max-w-4xl mx-auto" id="resume">
        <div className="space-y-4">
          <div className="text-xs uppercase font-bold text-muted-foreground border-b border-foreground pb-1 mb-6">
            :: Experience & Education Timeline ::
          </div>

          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="timeline-line" />

            <div className="space-y-6">
              {timelineData.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="timeline-dot flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-foreground" />
                    </div>

                    {/* Content */}
                    <div className="border border-foreground bg-card ml-4">
                      <div className="flex items-center gap-2 bg-secondary px-3 py-1 border-b border-foreground">
                        <Icon size={12} />
                        <span className="font-mono text-xs">{item.year}</span>
                        <span className="retro-badge text-[10px] ml-auto">
                          {item.type}
                        </span>
                      </div>
                      <div className="p-3">
                        <div className="font-bold text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground mb-1">
                          @ {item.organization}
                        </div>
                        <div className="text-xs">{item.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};

export default TimelineSection;
