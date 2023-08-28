import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/pages/About/About";
import ContainerParticle from "./Components/ParticlesConfig/ContainerParticle";
import Skill from "./Components/pages/skill/Skill";
import MyWork from "./Components/pages/myWork/MyWork";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/footer/Footer";

const App = () => {
  return (
    <div>
      <ContainerParticle />

      <Header />
      <main>
        <About />
        <Skill />
        <MyWork />
        <Footer />
        <NavBar />
      </main>
    </div>
  );
};

export default App;
