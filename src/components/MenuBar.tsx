import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Proof of Work", href: "#proof-of-work" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
    setActiveMenu(null);
  };

  return (
    <header className="menu-bar sticky top-0 z-50 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className="font-bold text-sm px-2">⌘</span>
        <div className="h-4 w-px bg-foreground" />
        
        <nav className="flex items-center">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
              className={`menu-item ${activeMenu === item.label ? "bg-foreground text-background" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs font-mono text-muted-foreground">
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
