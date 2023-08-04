"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import type { SetStateAction, Dispatch } from "react";
import { usePathname } from "next/navigation";
import MenuIcon from "./icons/menu-icon";
import XIcon from "./icons/x-icon";

const NavBar = ({
  navBarExpanded,
  setNavBarExpanded,
}: {
  navBarExpanded: boolean;
  setNavBarExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
  // List of paths
  const paths = [
    {
      name: "Coworking Spaces",
      url: "/cafe",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
  ];

  // Get pathname
  const pathname = usePathname();

  // Side Bar background ref
  const sideBarBgRef = useRef<HTMLDivElement>(null);

  // Close Navbar when user clicks on black background stuffs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If Userclick is in the black background stuff
      if (
        sideBarBgRef.current &&
        sideBarBgRef.current.contains(event.target as Node)
      ) {
        setNavBarExpanded(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setNavBarExpanded]);

  return (
    <nav className="sticky left-0 right-0 top-0 z-40 flex h-20 w-full flex-row items-center justify-between bg-custom-black px-5 lg:px-20 xl:h-[90px]">
      {/* Logo Icon */}
      <Link href="/" className="font-poppins font-bold text-xl xl:text-2xl">
        <span className="text-custom-blue-green">ganesha</span>
        <span className="text-white">space</span>
        <span className="text-custom-blue-green">.</span>
      </Link>

      {/* Menu Icon Button */}
      <button
        aria-label="Menu"
        className="block w-fit lg:hidden"
        onClick={() => setNavBarExpanded(!navBarExpanded)}
      >
        <MenuIcon size={30} className="stroke-white" />
      </button>

      <div
        className={`fixed right-0 top-0 z-10 flex h-full w-[230px] flex-col gap-6 bg-custom-black p-5 font-inter font-semibold text-base duration-300 ease-in-out lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:gap-12 lg:border-none lg:bg-none lg:p-0 xl:text-lg ${
          navBarExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          aria-label="Menu"
          className="block w-fit self-end lg:hidden"
          onClick={() => setNavBarExpanded(!navBarExpanded)}
        >
          <XIcon size={30} className="stroke-white" />
        </button>

        {/* Path lists */}
        <ul className="flex flex-col lg:flex-row lg:gap-16">
          {paths.map((path, index) => {
            return (
              <Link
                key={index}
                href={path.url}
                className="xl:after:block xl:after:border-b-2 xl:after:border-b-custom-blue-green xl:after:scale-x-0 xl:hover:after:scale-x-50 xl:after:duration-200 xl:after:ease-in-out xl:after:transition"
              >
                <li
                  className={`py-2 ${
                    pathname.startsWith(path.url)
                      ? "text-custom-blue-green"
                      : "text-white xl:hover:text-custom-blue-green xl:transition-colors xl:duration-200 xl:ease-in-out"
                  }`}
                >
                  {path.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* Side bar opaque background */}
      {navBarExpanded && (
        <div
          ref={sideBarBgRef}
          className="fixed inset-0 z-0 h-full w-full bg-opacity-80 backdrop-blur-sm lg:hidden"
        />
      )}
    </nav>
  );
};

export default NavBar;
