"use client";

import Header from "@/app/components/layout/header";
import "./globals.css";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import TransitionEffect from "./components/layout/transition-effect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const title = "Hanif Radityo Website";
  const keyword =
    "Hanif Radityo, Hanif, radityohanif, RadityoHanif, Hanif Radityo website, Hanif Radityo portfolio, full stack developer, Hanif Radityo full stack developer, developer Hanif Radityo, web developer Hanif Radityo, full stack development, full stack developer portfolio, web development, software developer Hanif Radityo, personal website Hanif Radityo, Hanif Radityo projects, full stack development portfolio";

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="keywords" content={keyword} />
      </head>
      <body
        className={`
          bg-[#2f6098]
          overflow-hidden
        `}
      >
        <AnimatePresence mode="wait">
          <TransitionEffect key={pathname} />
          <main
            className={`
              relative z-1 
              bg-gradient-to-r 
            from-gray-900 
            via-slate-900 
            to-black 
            text-white
            `}
          >
            <Header />
            {children}
          </main>
        </AnimatePresence>
      </body>
    </html>
  );
}
