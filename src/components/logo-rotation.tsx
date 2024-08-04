import { assets } from "@/utils/asset-utils";
import type { Framework } from "@/utils/framework-utils";
import { classname } from "@/utils/tailwind-utils";
import type { Tool } from "@/utils/tool-utils";
import Image from "next/image";

export const LogoRotation = ({
  currentLogo,
  logos,
}: { currentLogo: Tool | Framework; logos: string[] }) => {
  return (
    <div className="size-20 hover:scale-125 transition-transform duration-300 ease-out mx-2 -mt-2 align-middle inline-flex relative">
      {logos.map((name, index: number) => (
        <Image
          src={assets[name]}
          height="80"
          width="80"
          key={name}
          alt="tool logo"
          className={classname(
            "w-full h-full object-center object-contain absolute top-0 left-0 transition-all duration-500",
            currentLogo === name
              ? "opacity-100 transform-none"
              : index > logos.indexOf(currentLogo as Tool | Framework)
                ? "opacity-0 -translate-y-4"
                : "opacity-0 translate-y-4",
          )}
        />
      ))}
    </div>
  );
};
