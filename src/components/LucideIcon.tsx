import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className, size = 24 }) => {
  // Safe lookup with dynamic fallback
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Default fallback icon
    return <Icons.Activity className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
};
