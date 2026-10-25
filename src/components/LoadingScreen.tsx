import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [showProgress, setShowProgress] = useState(false);

  const bootSequence = [
    "SYSTEM BOOT v1.0.0",
    "Initializing memory... OK",
    "Loading portfolio modules...",
    "Checking system integrity... OK",
    "Mounting virtual desktop...",
    "Starting user interface...",
  ];

  useEffect(() => {
    let lineIndex = 0;
    const lineInterval = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        setBootLines((prev) => [...prev, bootSequence[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(lineInterval);
        setShowProgress(true);
      }
    }, 200);

    return () => clearInterval(lineInterval);
  }, []);

  useEffect(() => {
    if (showProgress) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showProgress, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-[100] flex items-center justify-center">
      <div className="w-full max-w-lg p-8">
        <div className="border-2 border-foreground p-6 bg-card">
          <div className="font-retro text-xl mb-4 text-center border-b-2 border-foreground pb-2">
            PORTFOLIO OS
          </div>
          
          <div className="font-retro text-sm space-y-1 mb-6 min-h-[150px]">
            {bootLines.map((line, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-muted-foreground">&gt;</span>
                <span>{line}</span>
              </div>
            ))}
            {!showProgress && bootLines.length < bootSequence.length && (
              <span className="animate-blink">█</span>
            )}
          </div>

          {showProgress && (
            <div className="space-y-2">
              <div className="font-retro text-sm text-center">
                Loading Desktop Environment...
              </div>
              <div className="retro-progress">
                <div className="retro-progress-bar" />
              </div>
            </div>
          )}
        </div>

        <div className="font-retro text-xs text-center mt-4 text-muted-foreground">
          © 2024 Portfolio Systems Inc.
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
