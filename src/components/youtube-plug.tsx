import { assets } from "@/utils/asset-utils";
import Image from "next/image";

export const YoutubePlug = () => {
  return (
    <>
      <Image
        src={assets.youtube}
        width="30"
        height="30"
        alt="youtube logo"
        className="inline-flex mx-1"
      />{" "}
    </>
  );
};
