"use client";

import Image from "next/image";
import Button from "./components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row min-h-screen justify-center items-center">
      <div className="flex-1 flex justify-center items-center">
        <motion.div
          animate={{
            rotate: [-30, -10, -30],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src={"/avatar.png"} alt="avatar" width={250} height={250} className="rounded-full opacity-70" />
        </motion.div>
      </div>
      <div className="flex-1 flex flex-col p-6">
        <div className="block mb-[30px]">
          <h1 className="text-4xl text-gray-200 font-bold mb-2 md:text-start text-center">
            Hi, I&apos;m Hanif – Full Stack Developer
          </h1>
          <p className="text-lg text-gray-400 font-light md:text-start text-center" style={{ letterSpacing: 2 }}>
            Turning ideas into impactful solutions is my passion.
          </p>
        </div>
        <div className="flex gap-5 md:justify-start justify-center">
          <Button onClick={() => router.push("project")}>My Projects</Button>
          <Button onClick={() => router.push("/hanif-radityo-resume.pdf")}>Resume</Button>
        </div>
      </div>
    </div>
  );
}
