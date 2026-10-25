import { useEffect, useState } from "react";
import { Users } from "lucide-react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count - in production, connect to a backend
    const storedCount = localStorage.getItem("visitorCount");
    const currentCount = storedCount ? parseInt(storedCount, 10) : 1337;
    const newCount = currentCount + 1;
    localStorage.setItem("visitorCount", newCount.toString());
    setCount(newCount);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 border border-foreground px-3 py-1 bg-card font-mono text-xs">
      <Users size={12} />
      <span className="text-muted-foreground">Visitors:</span>
      <span className="font-bold font-retro text-sm">{count.toLocaleString()}</span>
    </div>
  );
};

export default VisitorCounter;
