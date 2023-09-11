import React from "react";
const MyWork = () => {
  const CardInfo = [
    {
      src: "/dasboard.jpg",
      title: "Dasboard Sesion",
      info: "session simulator made with vite, tailwind and libraries",
      github: "https://github.com/Julioalexis434/Dasboard-sesion",
      demo: "https://dasboard-sesion.vercel.app/",
    },
    {
      src: "/flappy.jpg",
      title: "Game Flappy Bird",
      info: "Game flappy bird using canvas,  made with Html, css and JavaScript",
      github: "https://github.com/Julioalexis434/GameFlappyBird.git",
      demo: "https://game-flappy-bird-axel.vercel.app/",
    },
    {
      src: "/online_store.jpg",
      title: "Online Store Sesion",
      info: "First project, made with tailwind and vite",
      github: "https://github.com/Julioalexis434/Online-store.git",
      demo: "https://online-store-axel.vercel.app/",
    },
    {
      src: "/apiMovie.jpg",
      title: "Api Movie",
      info: "session simulator made with vite, tailwind and libraries",
      github: "https://github.com/Julioalexis434/SimpleApiMovie.git",
      demo: "https://api-movie-axel.vercel.app/",
    },
  ];

  return (
    <section id="work" className=" dark:bg-background ">
      <div className="p-2 pb-12 pt-[15vh] w-5/6 md:w-[90%] lg:w-5/6 mx-auto max-w-7xl ">
        <h1 className="px-4 py-2 rounded-full border border-primary font-bold tracking-wider w-max mb-8 text-primary dark:text-segundary/80 dark:border-segundary/80">
          My Proyects
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto flex-wrap">
          {CardInfo.map((item, index) => {
            return (
              <article
                key={index}
                className="dark:bg-[#0f0d1e] bg-white dark:border  border-gray-500  rounded-xl w-full max-w-xs overflow-hidden shadow-md hover:scale-[1.05] relative z-10 transition-transform duration-300 "
              >
                <img
                  src={item.src}
                  alt=""
                  className="border-b border-segundary max-w-[100%] h-[238px] w-full object-cover object-center"
                  height={238}
                />

                <div className="p-4 flex flex-col gap-3">
                  <div>
                    <h1 className="text-xl text-segundary font-bold mb-3">
                      {item.title}
                    </h1>
                    <p className="text-md mb-4 text-gray-600 dark:text-white">{item.info}</p>
                  </div>

                  <div className="flex  justify-between">
                    <a href={item.github} target="_blank">
                      <button className="border-2 border-segundary px-4 py-2 rounded-lg text-segundary hover:bg-segundary/40 transition-colors duration-300">
                        GitHub
                      </button>
                    </a>
                    <a href={item.demo} target="_blank">
                      <button className="border-2 border-segundary px-4 py-2 rounded-lg bg-segundary hover:bg-segundary/50 transition-colors duration-300">
                        Proving
                      </button>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
