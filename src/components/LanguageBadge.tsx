import React from "react";
import { Badge } from "@/components/ui/badge";

interface LanguageBadgeProps {
  language: string;
  level: string;
}

const LanguageBadge: React.FC<LanguageBadgeProps> = ({ language, level }) => {
  return (
    <Badge variant="secondary" className="text-sm px-3 py-1 rounded-full">
      {language} ({level})
    </Badge>
  );
};

export default LanguageBadge;