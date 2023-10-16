import React from "react";

const HeroRight = () => {
  return (
    <div className="col-span-2 p-4 select-none hidden lg:flex relative z-[10]">
      <article className="p-4 flex flex-col justify-between border rounded-xl w-full max-w-[600px] min-w-[200px] mx-auto backdrop-blur-[5px] ">
        <div className="dark:text-gray-500 text-primary/50">
          <div className="flex justify-between mb-10">
            <h2>Axel</h2>
            <span>Front-end / junior</span>
          </div>

          <img
            width={250}
            src="/person.png"
            alt="person image"
            className="rounded-xl mx-auto  mb-4 object-cover "
          />
          <div className="text-center">
            <p className="text-xl">julioalexis1096006444@gmail.com</p>
            <p>currently in ecuador <br/> 0979501005</p>
          </div>
        </div>

        <div className="flex justify-center ">
          <button onClick={()=>{
              window.location.href = "mailto:julioalexis1096006444@gmail.com";
          }} className="py-2  px-4 border border-primary bg-primary rounded-xl hover:text-primary hover:bg-transparent transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </article>
    </div>
  );
};

export default HeroRight;
