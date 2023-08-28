import React from "react";
import { RiUser3Fill, RiBracesFill } from "react-icons/ri";
import { MdWork, } from "react-icons/md";
import { Tooltip } from "react-tooltip";
const NavBar = () => {
  const NavLinks = [
    { icon: <RiUser3Fill />, name: "About Me", href: "#about-me" },
    { icon: <RiBracesFill />, name: "Skill", href: "#skill" },
    { icon: <MdWork />, name: "Work", href: "#work" },
  ];

  return (
    <nav className="z-50 fixed bottom-0 lg:top-1/2 lg:-translate-y-1/2 lg:right-2 xl:right-[2%] lg:w-max w-full h-max flex justify-center items-center ">

      <div className="dark:bg-white/10 bg-black/50 w-full flex justify-center lg:flex-col lg:rounded-full lg:py-4 text-2xl lg:text-xl backdrop-blur-lgtext-gray-300 backdrop-blur-[20px]">
        {NavLinks.map((item, index) => (
          <>
            <a
              href={item.href}
              key={index}
              data-tooltip-id={item.name}
              data-tooltip-content={item.name}
              data-tooltip-place="left"
              data-tooltip-delay-hide="20"
              className="p-3 block lg:hover:text-primary transition-colors"
            >
              {item.icon}
            </a>
            <Tooltip
              id={item.name}
              style={{ background: "white", color: "black", fontSize:"14px" }}
            />
          </>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
