import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ContainerParticle = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleLoaded = useCallback(async ()=>{}, [])

  return (
    <div className="paricles">
      <Particles
        init={particlesInit}
        loaded={particleLoaded}
        id="tsparticles"
        className="fixed lg:w-[70%] h-screen translate-z-0 z-10 top-0 right-0"
        options={{
          fullScreen:{
            enable:false
          },
            background: {
                color: {
                    value: "",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 20,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
              
                color: {
                    value: "#e68e2e",
                },
                links: {
                    color: "#f5d393",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />


    </div>
  );
};

export default ContainerParticle;
