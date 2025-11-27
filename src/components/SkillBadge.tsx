import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // Import cn utility

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
    <Badge
      className={cn(
        "text-sm px-3 py-1 rounded-full transition-colors duration-200",
        levelClasses[level]
      )}
    >
      {skill} ({displayLevel})
    </Badge>
  );
};

export default SkillBadge;