import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                Sobre Nós 
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              Na AGGIV, estamos comprometidos em oferecer uma experiência única e inesquecível na S.L.A. Para isso, dedicamos nossos esforços para garantir que cada aspecto do evento seja cuidadosamente planejado e executado, desde a organização até a divulgação. Queremos que os alunos possam aproveitar ao máximo tudo o que a S.L.A. tem a oferecer, participando de todas as atividades e oportunidades sem que nada passe despercebido. Nosso objetivo é criar um evento que deixe uma marca positiva, proporcionando momentos de aprendizado, interação e crescimento que perdurem na memória de cada participante.              </p>
           
              <button data-aos="fade-up" className="button-outline">
                Ver Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
