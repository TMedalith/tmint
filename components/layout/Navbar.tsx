import Image from "next/image";
import React from "react";
import { FaProjectDiagram, FaStar, FaTools } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import logo from "@/public/logo.svg";

const Navbar = () => {
  
  return (
    <div className="w-full fixed top-0 h-20 backdrop-blur-md z-50 px-10 flex items-center justify-between">
      <a href={`/#home`} className="h-auto w-auto flex flex-row items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <span className="font-pacifico text-xl font-medium text-white text-transparent hidden md:block bg-clip-text">
          Tmint
        </span>
      </a>

      <div className="absolute left-1/2 transform -translate-x-1/2 gap-10 flex items-center justify-between border border-[#869F77] bg-[#869F775b] shadow-lg px-[24px] py-[12px] rounded-full text-gray-200 transition-all hover:shadow-xl">
        <a href={`/#about`} className="relative cursor-pointer transition-all before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-[#E7B5AC] before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left flex items-center group hover:text-[#E7B5AC]">
          <FaUser className="mr-2 group-hover:animate-spin transition-colors duration-300" />
          <span className="hidden md:inline">About</span>
        </a>
        {/* <a href={`/#skills`} className="relative cursor-pointer transition-all before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-[#E7B5AC] before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left flex items-center group hover:text-[#E7B5AC]">
          <FaTools className="mr-2 group-hover:animate-spin transition-colors duration-300" />
          <span className="hidden md:inline">Skills</span>
        </a> */}
        <a href={`/#projects`} className="relative cursor-pointer transition-all before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-[#E7B5AC] before:scale-x-0 before:origin-bottom-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left flex items-center group hover:text-[#E7B5AC]">
          <FaProjectDiagram className="mr-2 group-hover:animate-spin transition-colors duration-300" />
          <span className="hidden md:inline">Projects</span>
        </a>
      </div>

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <button className="relative inline-flex overflow-hidden rounded-lg p-[2px] transition-all duration-300 ease-in-out transform">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#869F77_0%,#869F77_20%,#FDE9EA_40%,#869F77_60%,#869F77_80%,#869F77_100%)]" />
          <span className="cursor-pointer px-6 py-2 backdrop-blur duration-300 ease-in-out animate-shimmer rounded-md bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-50 transition-colors">
            CV
          </span>
        </button>
      </a>
    </div>
  );
};

export default Navbar;
