"use client";

import { useState, useEffect, createContext } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
export const ImagesPopUp = createContext({});

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  // Navbar State
  const [navBarExpanded, setNavBarExpanded] = useState(false);
  const [popUp, setPopUp] = useState<React.ReactNode | undefined>();

  // Reset navbar everytime path changes
  const pathname = usePathname();
  useEffect(() => {
    setNavBarExpanded(false);
  }, [pathname]);
  return (
    <body
      className={`flex min-h-screen flex-col bg-custom-soft-black ${navBarExpanded && "overflow-hidden"
        }`}
    >

      <NavBar
        navBarExpanded={navBarExpanded}
        setNavBarExpanded={setNavBarExpanded}
      />
      <ImagesPopUp.Provider value={setPopUp}>
        {popUp ? <>{popUp}</> : children}
      </ImagesPopUp.Provider>
      <Footer />
    </body>
  );
};

export default SiteLayout;
