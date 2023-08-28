import React, { useState } from "react";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiGithubFill,
} from "react-icons/ri";
import { SiTailwindcss, SiGit } from "react-icons/si";
const Skill = () => {
  const [index, setIndex] = useState(0);

  const SkillData = [
    {
      title: "Tecnologies",
      iconList: [
        {
          icon: <RiHtml5Fill />,
          name: "Html",
        },
        {
          icon: <RiCss3Fill />,
          name: "Css",
        },
        {
          icon: <RiJavascriptFill />,
          name: "JavaScript",
        },
      ],
    },

    {
      title: "Framework",
      iconList: [
        {
          icon: <RiReactjsLine />,
          name: "React",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind",
        },
      ],
    },

    {
      title: "Version Control",
      iconList: [
        {
          icon: <SiGit />,
          name: "Git",
        },
        {
          icon: <RiGithubFill />,
          name: "GitHub",
        },
      ],
    },
  ];

  return (
    <section id="skill" className="bg-gray-200 dark:bg-[#0f0d1e] flex justify-center items-center relative overflow-hidden h-screen">
      <div className="absolute -right-8 top-0 -rotate-45">
        <img src="fuego2.png" alt="" />
      </div>

      <div className=" w-[90%] lg:w-5/6 max-w-7xl flex flex-col gap-12 px-2 relative z-10">
        <div>
          <h1 className="px-4 py-2 rounded-full border border-primary font-bold tracking-wider w-max mb-8 text-primary dark:text-segundary/80 dark:border-segundary/80">
            SKILL
          </h1>
          <p className="text-gray-500 text-lg dark:text-gray-300 ">
            "Passionate about frontend development, working with HTML, CSS and
            JavaScript to create attractive and functional interfaces. Committed
            to constant learning and continuous improvemen
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-x-12 gap-y-12 lg:gap-y-0">

          <div className="flex items-center justify-between  gap-x-4 text-sm lg:flex-col lg:items-start lg:gap-y-8 lg:text-xl flex-wrap gap-y-8 text-black font-medium dark:text-white">
            {SkillData.map((item, indexItem) => (
              <h1
                key={indexItem}
                className={`${
                  index === indexItem
                    ? "text-primary before:w-[100%] before:bg-segundary transition-all before:duration-300 w-[100%]"
                    : "before:bg-primary dark:before:bg-white before:w-[5%] "
                } before:absolute before:-bottom-1 before:left-0 before:h-[1px]  cursor-pointer relative w-max`}
                onClick={() => {
                  setIndex(indexItem);
                }}
              >
                {item.title}
              </h1>
            ))}
          </div>

          <div className="flex  gap-x-8 lg:text-3xl">
            {SkillData[index].iconList.map((item, indexItem) => {
              return (
                <div
                  key={indexItem}
                  className="flex flex-col justify-start items-center text-4xl lg:text-5xl text-gray-800 dark:text-white"
                >
                  {item.icon}
                  <h2 className="text-sm">{item.name}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skill;
