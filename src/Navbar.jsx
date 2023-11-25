import React, { useEffect, useState } from "react";
import { navLinks } from "./Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import SignUpForm from "./SignUpForm";
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  const handleSignUpClick = () => {
  
    navigate('/SignUp');
  
  };

  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div className="text-xl text-black uppercase tracking-wide font-bold">
              GLAP
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => (
              <NavLink key={navLink.id} {...navLink} />
            ))}
          </div>
          <button
            className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>
      </div>
      {showSignUpForm && (
        <div
          className={`${
            active ? "bg-Solitude" : ""
          } fixed w-full top-0 left-0 z-20 py-4`}
        >
          <div className="container mx-auto">
            <SignUpForm />
          </div>
        </div>
      )}
    
      {toggle && (
        <motion.div
          initial={{
            x: "50%",
            y: "50%",
            translateX: "-50%",
            translateY: "-50%",
            opacity: 0,
          }}
          animate={{ y: "50%", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed w-48 h-48 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          {navLinks.map((navLink) => (
            <MobileNavLinks
              key={navLink.id}
              {...navLink}
              setToggle={setToggle}
            />
          ))}
          <HiX
            className="absolute right-12 top-12 text-3xl cursor-pointer"
            onClick={() => setToggle(false)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
