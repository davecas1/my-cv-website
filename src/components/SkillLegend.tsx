import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SkillLegend: React.FC = () => {
  return (
    <div className="mb-6 p-4 bg-card/80 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-muted-foreground">
        Skill Level Legend
      </h3>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Badge className={cn("w-4 h-4 p-0 rounded-full bg-skillAdvanced")} />
          <span className="text-sm text-foreground">Advanced</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={cn("w-4 h-4 p-0 rounded-full bg-skillIntermediate")} />
          <span className="text-sm text-foreground">Intermediate</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={cn("w-4 h-4 p-0 rounded-full bg-skillBeginner")} />
          <span className="text-sm text-foreground">Beginner</span>
        </div>
      </div>
    </div>
  );
};

export default SkillLegend;