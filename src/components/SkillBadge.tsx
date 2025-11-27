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

  return (
    <Badge
      className={cn(
        "text-sm px-3 py-1 rounded-full transition-colors duration-200",
        levelClasses[level]
      )}
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;