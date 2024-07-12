"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  const navItems = ["Events", "Events", "Blog", "About", "Contact"];
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="container py-10"
      >
        <ul className="hidden items-center justify-center gap-14 text-lg uppercase text-white/35 md:flex">
          {navItems.map((item, i) => (
            <li key={i} className="cursor-pointer hover:text-white">
              {item}
            </li>
          ))}
        </ul>
        <button
          className="group ms-auto flex items-center gap-3 md:hidden"
          onClick={() => setShowNav(true)}
        >
          <div className="flex w-12 flex-col items-center space-y-2">
            <div className="h-0.5 w-8 rounded-full bg-white opacity-50 transition-all duration-300 group-hover:w-12"></div>
            <div className="h-0.5 w-12 rounded-full bg-white opacity-50 transition-all duration-300 group-hover:w-8"></div>
            <div className="h-0.5 w-8 rounded-full bg-white opacity-50 transition-all duration-300 group-hover:w-12"></div>
          </div>
        </button>
      </motion.nav>
      <MobileMenu show={showNav} setShowNav={setShowNav} />
    </>
  );
};

export default Navbar;
