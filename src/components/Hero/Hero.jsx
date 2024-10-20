import React, { useEffect, useState } from "react";

import yellowCar from "../../assets/banner-car.jfif";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? yellowCar : yellowCar}
              alt=""
              className="sm:scale-100 relative -z-10 max-h-[500px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
            O que é a
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              S.L.A
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              O evento S.L.A tem como objetivo promover a inclusão de todas as minorias, em uma serie de atividades, palestras e proporciona um espaço para discussão e reflexão sobre as diversas formas de desigualdade e exclusão na sociedade.
              {" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Ver mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
