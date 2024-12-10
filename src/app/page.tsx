"use client";

import ButtonKbdCommand from "@/components/ui/button-kbd-command";
import ButtonKbdPlain from "@/components/ui/button-kbd-plain";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen justify-center items-center">
      <div className="flex-1 flex justify-center items-center">
        <Image src={"/avatar.webp"} alt="logo" width={300} height={300} className="rounded-full" />
      </div>
      <div className="flex-1 flex flex-col p-6">
        <div className="block mb-[30px]">
          <h1 className="text-4xl text-gray-200 font-bold mb-2 md:text-start text-center">
            Hi, I&apos;m Hanif – Full Stack Developer
          </h1>
          <p className="text-lg text-gray-400 font-light font-mono md:text-start text-center">
            Turning ideas into impactful solutions is my passion.
          </p>
        </div>
        <div className="flex gap-5 md:justify-start justify-center">
          <ButtonKbdPlain href="/about">Go To Know Me</ButtonKbdPlain>
          <ButtonKbdCommand href="/project">Projects</ButtonKbdCommand>
        </div>
      </div>
    </div>
  );
}
