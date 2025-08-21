"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Spin } from "antd";
import NavItems from "./NavItems";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const isLoading = false;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spin />
      </div>
    );
  }

  const items = [
    { key: "home", label: "Home", path: "/" },
    { key: "about", label: "About", path: "/about" },
    { key: "skills", label: "Skills", path: "/skills" },
    { key: "portfolio", label: "Portfolio", path: "/portfolio" },
    { key: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <header
        className={`bg-black w-full fixed top-0 z-20 bg-opacity-20 backdrop-blur-sm`}
      >
        <nav className="h-[80px] relative z-10 w-full">
          <div className="flex justify-between items-center h-full w-[90%] mx-auto">
            <div className="flex items-center lg:gap-0 gap-1">
              <div className="md:hidden">
                <AiOutlineMenu
                  onClick={() => setShowDrawer(!showDrawer)}
                  className="text-white cursor-pointer"
                  size={24}
                />
              </div>
            </div>
            {/* Nav Items for Desktop */}
            <div className="hidden md:flex p-2 items-center gap-5">
              <NavItems items={items} />
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <MobileDrawer open={showDrawer} setOpen={setShowDrawer} items={items} />
      </header>
    </div>
  );
};

export default Navbar;
