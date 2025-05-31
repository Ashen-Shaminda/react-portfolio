import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profilePic from "../assets/profile.png"; // Assuming you have a logo image

const NavBar = () => {
  return (
    <nav className="lg:mb-20 flex items-center justify-between py-6">
      <img className="mx-2 w-10 rounded-full" src={profilePic} alt="logo"></img>
      <div className="lg:flex flex-shrink-0 items-center gap-30 text-2xl font-semibold hidden">
        <button>About me</button>
        <button>Technologies</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaFacebook />
        <FaXTwitter />
      </div>
    </nav>
  );
};

export default NavBar;
