import type { Framework } from "@/utils/framework-utils";
import { cn } from "@/utils/tailwind-utils";
import { NumberRotation } from "./number-rotation";

export const TimeUnit = ({
  label,
  value,
  currentFramework,
}: { label: string; value: number; currentFramework: Framework }) => {
  return (
    <div className="flex flex-col">
      <div className="text-white text-7xl font-semibold">
        <NumberRotation number={value} />
      </div>
      <div
        className={cn("text-2xl transition-colors duration-1000 font-medium", {
          "text-react": currentFramework === "react",
          "text-tailwind": currentFramework === "tailwind",
        })}
      >
        {label}
      </div>
    </div>
  );
};
