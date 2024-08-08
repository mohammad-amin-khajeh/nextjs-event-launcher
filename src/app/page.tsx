"use client";
import { CountdownTimer } from "@/components/countdown-timer";
import { LogoRotation } from "@/components/logo-rotation";
import { YoutubePlug } from "@/components/youtube-plug";
import { assets } from "@/utils/asset-utils";
import { type Framework, frameworks } from "@/utils/framework-utils";
import { cn } from "@/utils/tailwind-utils";
import { type Tool, tools } from "@/utils/tool-utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export default function Home() {
  const [framework, setFramework] = useState<Framework>(frameworks[0]);
  const [tool, setTool] = useState<Tool>(tools[0]);
  const [showbg, setShowbg] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const changeFramework = () => {
      setFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };

    const intervalId = setInterval(changeFramework, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const changetool = () => {
      setTool(tools[currentIndex]);
      currentIndex = (currentIndex + 1) % tools.length;
    };

    const intervalId = setInterval(changetool, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowbg(true);
  }, []);

  return (
    <main>
      <div
        className={cn(
          "fixed inset-0 transition-colors duration-1000 opacity-65",
          {
            "bg-react": framework === "react",
            "bg-tailwind": framework === "tailwind",
          },
        )}
      />
      <Image
        role="presentation"
        src={assets.gradient}
        width={1920}
        height={1080}
        alt="gradient background"
        className="fixed inset-0 h-screen w-screen object-cover"
      />
      <div
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      />

      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-1000",
          !showbg ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          <h1
            className={`text-7xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}
          >
            nextJs event launcher{" "}
            <span
              className={cn("transition-colors duration-500", {
                "text-react": framework === "react",
                "text-tailwind": framework === "tailwind",
              })}
            >
              built
            </span>{" "}
            in <LogoRotation currentLogo={framework} logos={frameworks} />{" "}
            <span
              className={cn("transition-colors duration-500", {
                "text-neovim": tool === "neovim",
                "text-arch": tool === "arch",
                "text-suckless": tool === "suckless",
              })}
            >
              using
            </span>
            <LogoRotation currentLogo={tool} logos={tools} />
          </h1>

          <CountdownTimer currentFramework={framework} />

          <p className="mt-36 font-semibold text-lg">
            Join my <YoutubePlug /> now and learn to become an elite CLI
            developer(persian only)
          </p>
          <button
            type="button"
            className={cn(`youtube ${poppins.className}`, {
              "bg-neovim": tool === "neovim",
              "bg-arch": tool === "arch",
              "bg-suckless": tool === "suckless",
              "hover:text-neovim": tool === "neovim",
              "hover:text-arch": tool === "arch",
              "hover:text-suckless": tool === "suckless",
            })}
          >
            <a
              target="_blank"
              href="http://www.youtube.com/@MohammadaminKhajehkoolaki"
              rel="noreferrer"
            >
              Join
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
