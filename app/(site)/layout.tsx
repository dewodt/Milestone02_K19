"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  // Navbar State
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  // Reset navbar everytime path changes
  const pathname = usePathname();
  useEffect(() => {
    setNavBarExpanded(false);
  }, [pathname]);

  return (
    <body
      className={`flex min-h-screen flex-col bg-custom-soft-black ${
        navBarExpanded && "overflow-hidden"
      }`}
    >
      <NavBar
        navBarExpanded={navBarExpanded}
        setNavBarExpanded={setNavBarExpanded}
      />
      {children}
      <Footer />
    </body>
  );
};

export default SiteLayout;
