import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Bell, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertBannerProps {
  type: "info" | "warning" | "critical" | "success";
  title: string;
  message: string;
  timestamp?: string;
}

const AlertBanner = ({ type, title, message, timestamp }: AlertBannerProps) => {
  const icons = {
    info: Bell,
    warning: AlertTriangle,
    critical: AlertTriangle,
    success: CheckCircle,
  };

  const Icon = icons[type];

  const variants = {
    info: "border-primary bg-primary/5 text-primary",
    warning: "border-warning bg-warning/5 text-warning",
    critical: "border-destructive bg-destructive/5 text-destructive",
    success: "border-success bg-success/5 text-success",
  };

  return (
    <Alert className={cn("border-2", variants[type])}>
      <Icon className="h-5 w-5" />
      <AlertTitle className="font-semibold">{title}</AlertTitle>
      <AlertDescription className="text-sm">
        {message}
        {timestamp && (
          <span className="block mt-1 text-xs opacity-70">{timestamp}</span>
        )}
      </AlertDescription>
    </Alert>
  );
};

export default AlertBanner;