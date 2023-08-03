"use client";

import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-poppins",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // Navbar State
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  // Reset navbar everytime path changes
  const pathname = usePathname();
  useEffect(() => {
    setNavBarExpanded(false);
  }, [pathname]);

  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body
        className={`flex flex-col min-h-screen bg-custom-soft-black ${
          navBarExpanded && "overflow-hidden"
        }`}
      >
        <NavBar
          navBarExpanded={navBarExpanded}
          setNavBarExpanded={setNavBarExpanded}
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;