import HeroLeftAbout from "./hero-right/HeroRight";
import HeroRight from "./heroLeft/HeroLeft";
const About = () => {
  return (
    <section id="about-me" className=" dark:bg-background pt-[10vh] bg-white  h-screen transition-all flex justify-center items-center">
      <div className="rotate-180 absolute top-0 left-0 select-none">
        <img src="fuego1.png" alt="" className="w-[250px] lg:w-[300px] xl:w-[400px] transition-all"/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 h-full lg:w-[90%] xl:w-5/6 max-w-7xl">
      <HeroRight />
      <HeroLeftAbout />
      </div>

    </section>
  );
};

export default About;
