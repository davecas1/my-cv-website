import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // Import cn utility

interface SkillBadgeProps {
  skill: string;
  level: "advanced" | "intermediate" | "beginner";
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, level }) => {
  const levelClasses = {
    advanced: "bg-green-600 hover:bg-green-700 text-white",
    intermediate: "bg-blue-600 hover:bg-blue-700 text-white",
    beginner: "bg-yellow-500 hover:bg-yellow-600 text-gray-900",
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