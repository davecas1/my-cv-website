import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LanguageBadgeProps {
  language: string;
  level: string;
}

const LanguageBadge: React.FC<LanguageBadgeProps> = ({ language, level }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant="secondary" className="text-sm px-3 py-1 rounded-full cursor-help">
          {language}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{level}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default LanguageBadge;