import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { scrollToId } from "@/lib/scroll";

const menuItems = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Proof of Work", id: "proof-of-work" },
  { label: "Contact", id: "contact" },
];

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="menu-bar sticky top-0 z-50 flex items-center justify-between gap-2">
      <div className="flex items-center gap-1 min-w-0">
        <span className="font-bold text-sm px-2">⌘</span>
        <div className="h-4 w-px bg-foreground shrink-0" />
        <nav className="flex items-center overflow-x-auto whitespace-nowrap">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                scrollToId(item.id);
                setActiveMenu(null);
              }}
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
              className={`menu-item ${activeMenu === item.label ? "bg-foreground text-background" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <span className="hidden sm:inline text-xs font-mono text-muted-foreground">
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default MenuBar;