import React from "react";
import {
  RiSunFill,
  RiMoonFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
const LinkHeader = ({ darkMode, setDarkMode }) => {
  function changeDark() {
    if (darkMode) {
      document.getElementById("html").classList.add("dark");
    } else {
      document.getElementById("html").classList.remove("dark");
    }
  }

  changeDark();

  return (
    <nav className="flex text-2xl gap-8 text-gray-600 dark:text-white">
      <div className="flex gap-4">
        <a href="https://github.com/Julioalexis434" target="_blank">
          <RiGithubFill />
        </a>
        <a href="https://www.linkedin.com/in/julio-alexis-hoyos" target="_blank">
          <RiLinkedinBoxFill />
        </a>
      </div>

      <div
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="cursor-pointer text-primary"
      >
        {darkMode ? <RiSunFill /> : <RiMoonFill />}
      </div>
    </nav>
  );
};

export default LinkHeader;
