import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { IoMdPhonePortrait } from "react-icons/io";

const skillsData = [
  {
    name: "Melhor Visibilidade",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Utilizaremos diversas plataformas de redes sociais para garantir que a S.L.A. obtenha a visibilidade que merece, permitindo que o público reconheça plenamente sua importância e valor",
    aosDelay: "0",
  },
  {
    name: "Propagação da S.L.A",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Nós, da AGGIV, almejamos que a S.L.A. não seja exclusiva do ITB Brasílio Flores, mas que seja implementada em todas as unidades da FIEB, com o objetivo de criar um ambiente acolhedor e positivo para todos os alunos.",
    aosDelay: "500",
  },
  {
    name: "Nosso APP",
    icon: (
      <IoMdPhonePortrait className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Nosso aplicativo oferecerá uma variedade de funcionalidades para que os usuários possam aproveitar ao máximo tudo o que o evento tem a oferecer.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Nosso diferencial
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Ver Mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
