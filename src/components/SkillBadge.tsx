import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // Import cn utility
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillBadgeProps {
  skill: string;
  level: "advanced" | "intermediate" | "beginner";
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, level }) => {
  const levelClasses = {
    advanced: "bg-skillAdvanced text-skillAdvanced-foreground",
    intermediate: "bg-skillIntermediate text-skillIntermediate-foreground",
    beginner: "bg-skillBeginner text-skillBeginner-foreground",
  };

  // Capitalize the first letter of the level for display
  const displayLevel = level.charAt(0).toUpperCase() + level.slice(1);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          className={cn(
            "text-sm px-3 py-1 rounded-full transition-colors duration-200 cursor-help",
            levelClasses[level]
          )}
        >
          {skill}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{displayLevel}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default SkillBadge;