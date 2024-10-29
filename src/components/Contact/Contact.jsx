import React from "react";
import { Link } from "react-router-dom"; // Importando o Link

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Sua opinião é importante para nós!
              </h1>
              <p className="text-gray-400">
                Tem algo que você gostaria de ver na S.L.A.? Alguma crítica, dúvida ou informação que deseja saber mais? Compartilhe seu feedback e nos ajude a melhorar.
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              {/* Usando Link para redirecionar para a página ContactUs */}
              <Link
                to="/contact" // Altere aqui para a rota correta
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase"
              >
                Contate-nos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
