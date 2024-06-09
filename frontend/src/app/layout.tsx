import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Air",
  description: "Air, your agency for all things air. We provide air for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        {children}
        <Toaster className="" />
      </body>
    </html>
  );
}
