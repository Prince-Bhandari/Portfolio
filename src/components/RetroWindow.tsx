import { ReactNode } from "react";

interface RetroWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const RetroWindow = ({ title, children, className = "", id }: RetroWindowProps) => {
  return (
    <div id={id} className={`retro-window ${className}`}>
      <div className="retro-window-header">
        <div className="retro-window-controls">
          <div className="retro-window-btn retro-window-btn-close" />
          <div className="retro-window-btn retro-window-btn-minimize" />
          <div className="retro-window-btn retro-window-btn-maximize" />
        </div>
        <span className="retro-window-title">{title}</span>
        <div className="w-10" /> {/* Spacer for balance */}
      </div>
      <div className="retro-window-content">{children}</div>
    </div>
  );
};

export default RetroWindow;
