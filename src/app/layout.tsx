"use client";

import "./globals.css";
import Header from "@/components/layout/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Hanif Radityo Website</title>
      </head>
      <body
        className={`
          antialiased 
          bg-gradient-to-r 
          from-gray-900 
          via-slate-900 
          to-black 
          text-white
        `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
