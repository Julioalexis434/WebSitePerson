import React, { useState } from "react";
import "./header.css";

import LinkHeader from "./HeaderLinks/LinkHeader";
const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  

  return (
    <header className="pl-[5%] xl:pl-[10%] pr-[10%] py-4 fixed w-screen  backdrop-blur-[5px] flex lg:flex-row justify-between items-center bg-transparent z-20 border-b border-primary/50 dark:border-none dark:bg-background/60">
   
        <h1 className="logo text-4xl after:bg-primary px-1 dark:text-white text-gray-700 font-bold relative select-none">
          Axel
        </h1>
      
      <LinkHeader darkMode ={darkMode} setDarkMode={setDarkMode}/>
   
  
    </header>
  );
};

export default Header;
