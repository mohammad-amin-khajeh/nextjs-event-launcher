"use client";
import { FrameworkRotation } from "@/components/framework-rotation";
import { ToolRotation } from "@/components/tool-rotation";
import { assets } from "@/utils/asset-utils";
import { type Framework, frameworks } from "@/utils/framework-utils";
import { classname } from "@/utils/tailwind-utils";
import { type Tool, tools } from "@/utils/tool-utils";
import Image from "next/image";
import { useState, useEffect } from "react";


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
                className={classname(
                    "fixed inset-0 transition-colors duration-1000 opacity-65",
                    {
                        "bg-react": framework === "react",
                        "bg-tailwind": framework === "tailwind",
                    }
                )} />
            <Image
                role="presentation"
                src={assets.gradient}
                width={1920}
                height={1080}
                alt="gradient background"
                className="fixed inset-0 h-screen w-screen object-cover" />
            <div
                className="fixed inset-0 opacity-20"
                style={{
                    backgroundImage: `url(${assets.square})`,
                    backgroundSize: "30px",
                }} />

            <div
                className={classname(
                    "bg-black fixed inset-0 transition-opacity duration-1000",
                    !showbg ? "opacity-100" : "opacity-0"
                )} />

            <div className="max-w-7xl mt-20 mx-auto">
                <div className="flex flex-col items-center relative z-10">
                    <h1
                        className={`text-7xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}
                    >
                        nextJs event launcher{" "}
                        <span
                            className={classname("transition-colors duration-500", {
                                "text-react": framework === "react",
                                "text-tailwind": framework === "tailwind",
                            })}
                        >
                            built
                        </span>{" "}
                        in <FrameworkRotation currentFramework={framework} />{" "}
                        <span
                            className={classname("transition-colors duration-500", {
                                "text-neovim": tool === "neovim",
                                "text-arch": tool === "arch",
                                "text-suckless": tool === "dwm" || tool === "st",
                            })}
                        >
                            using
                        </span>
                        <ToolRotation currentTool={tool} />
                    </h1>

                    <p className={`mb-8 ${poppins.className} text-lg`}>
                        Join my{" "}
                        <Image
                            src={assets.youtube}
                            width="30"
                            height="30"
                            alt="youtube logo"
                            className="inline-flex mx-1" />{" "}
                        now and learn to become an elite CLI developer(persian only)
                    </p>
                </div>
            </div>
        </main>
    );
}

