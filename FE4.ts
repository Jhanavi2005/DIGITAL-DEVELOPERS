import { Card } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { useEffect, useState } from "react";

interface VitalMonitorProps {
  label: string;
  currentValue: number;
  unit: string;
  waveform?: boolean;
}

const VitalMonitor = ({ label, currentValue, unit, waveform = false }: VitalMonitorProps) => {
  const [value, setValue] = useState(currentValue);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(currentValue + (Math.random() - 0.5) * 2);
      setPulse(true);
      setTimeout(() => setPulse(false), 200);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentValue]);

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className={h-5 w-5 text-primary ${pulse ? 'scale-125' : ''} transition-transform} />
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-foreground">{Math.round(value)}</span>
          <span className="text-sm text-muted-foreground">{unit}</span>
        </div>
      </div>
      {waveform && (
        <div className="h-16 bg-muted/50 rounded flex items-center justify-center">
          <div className="flex items-center gap-0.5 h-full w-full px-2">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-primary rounded-full transition-all duration-100"
                style={{
                  height: ${Math.random() * 60 + 20}%,
                  opacity: 0.3 + Math.random() * 0.7,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default VitalMonitor;
