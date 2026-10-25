import RetroWindow from "./RetroWindow";
import { Github, Code2, Shield, ExternalLink } from "lucide-react";

const ProofOfWorkSection = () => {
  return (
    <section id="proof-of-work" className="py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="border-2 border-foreground bg-secondary px-4 py-2 text-center">
          <span className="font-bold uppercase text-sm">
            :: Proof of Work Verification ::
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* GitHub Window */}
          <div className="retro-window">
            <div className="retro-window-header">
              <div className="retro-window-controls">
                <div className="retro-window-btn retro-window-btn-close" />
                <div className="retro-window-btn retro-window-btn-minimize" />
                <div className="retro-window-btn retro-window-btn-maximize" />
              </div>
              <span className="retro-window-title flex items-center gap-1">
                <Github size={12} /> GitHub
              </span>
              <div className="w-10" />
            </div>
            <div className="retro-window-content space-y-4">
              <div className="text-center border-b border-foreground pb-3">
                <div className="w-16 h-16 mx-auto border-2 border-foreground bg-secondary flex items-center justify-center mb-2">
                  <Github size={32} />
                </div>
                <div className="font-bold">@username</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="border border-foreground p-2">
                  <div className="font-retro text-xl">42</div>
                  <div className="text-muted-foreground uppercase">Repos</div>
                </div>
                <div className="border border-foreground p-2">
                  <div className="font-retro text-xl">1.2k</div>
                  <div className="text-muted-foreground uppercase">Commits</div>
                </div>
              </div>

              {/* Contribution graph mock */}
              <div className="border border-foreground p-2">
                <div className="text-xs text-muted-foreground mb-2">Contributions</div>
                <div className="flex gap-px flex-wrap">
                  {Array.from({ length: 52 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 border border-foreground ${
                        Math.random() > 0.5 ? "bg-foreground" : "bg-background"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="retro-btn w-full text-center text-xs flex items-center justify-center gap-1"
              >
                <ExternalLink size={12} />
                View Profile
              </a>
            </div>
          </div>

          {/* LeetCode Window */}
          <div className="retro-window">
            <div className="retro-window-header">
              <div className="retro-window-controls">
                <div className="retro-window-btn retro-window-btn-close" />
                <div className="retro-window-btn retro-window-btn-minimize" />
                <div className="retro-window-btn retro-window-btn-maximize" />
              </div>
              <span className="retro-window-title flex items-center gap-1">
                <Code2 size={12} /> LeetCode
              </span>
              <div className="w-10" />
            </div>
            <div className="retro-window-content space-y-4">
              <div className="text-center border-b border-foreground pb-3">
                <div className="w-16 h-16 mx-auto border-2 border-foreground bg-secondary flex items-center justify-center mb-2">
                  <Code2 size={32} />
                </div>
                <div className="font-bold">@username</div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-muted-foreground uppercase mb-2">
                  Problems Solved
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs border border-foreground p-2">
                    <span>Easy</span>
                    <span className="font-bold">127</span>
                  </div>
                  <div className="flex justify-between text-xs border border-foreground p-2">
                    <span>Medium</span>
                    <span className="font-bold">89</span>
                  </div>
                  <div className="flex justify-between text-xs border border-foreground p-2">
                    <span>Hard</span>
                    <span className="font-bold">23</span>
                  </div>
                </div>
              </div>

              <div className="border border-foreground p-2 text-center">
                <div className="font-retro text-2xl">239</div>
                <div className="text-xs text-muted-foreground uppercase">Total Solved</div>
              </div>

              <a
                href="#"
                className="retro-btn w-full text-center text-xs flex items-center justify-center gap-1"
              >
                <ExternalLink size={12} />
                View Profile
              </a>
            </div>
          </div>

          {/* TryHackMe Window */}
          <div className="retro-window">
            <div className="retro-window-header">
              <div className="retro-window-controls">
                <div className="retro-window-btn retro-window-btn-close" />
                <div className="retro-window-btn retro-window-btn-minimize" />
                <div className="retro-window-btn retro-window-btn-maximize" />
              </div>
              <span className="retro-window-title flex items-center gap-1">
                <Shield size={12} /> TryHackMe
              </span>
              <div className="w-10" />
            </div>
            <div className="retro-window-content space-y-4">
              <div className="text-center border-b border-foreground pb-3">
                <div className="w-16 h-16 mx-auto border-2 border-foreground bg-secondary flex items-center justify-center mb-2">
                  <Shield size={32} />
                </div>
                <div className="font-bold">@username</div>
              </div>

              <div className="border border-foreground p-3 text-center">
                <div className="text-xs text-muted-foreground uppercase mb-1">Rank</div>
                <div className="font-retro text-2xl">Top 5%</div>
                <div className="text-xs text-muted-foreground">#4,521 Global</div>
              </div>

              <div className="grid grid-cols-3 gap-1">
                {["Badge1", "Badge2", "Badge3"].map((badge) => (
                  <div
                    key={badge}
                    className="border border-foreground p-2 text-center"
                  >
                    <div className="w-8 h-8 mx-auto border border-foreground bg-secondary flex items-center justify-center">
                      <Shield size={16} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs text-center text-muted-foreground">
                +12 more badges
              </div>

              <a
                href="#"
                className="retro-btn w-full text-center text-xs flex items-center justify-center gap-1"
              >
                <ExternalLink size={12} />
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofOfWorkSection;
