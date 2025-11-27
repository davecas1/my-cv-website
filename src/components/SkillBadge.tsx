import React from "react";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <Badge variant="default" className="text-sm px-3 py-1 rounded-full">
      {skill}
    </Badge>
  );
};

export default SkillBadge;