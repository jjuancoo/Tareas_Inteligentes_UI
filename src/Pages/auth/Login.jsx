import React from "react";
import NavBar from "../../components/auth/NavBar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center">
        <div className="w-1/4 mt-20">
          <h1 className="text-black font-semibold text-2xl">
            Colabora como nunca antes
          </h1>
          <h1 className="text-gray-500 text-2xl font-semibold ">
            Inicia Sesión en Taski
          </h1>
          <form className="mt-12 mb-4">
            <div className="space-y-2 mb-12 ">
              <label className="font-semibold">Correo electronico*</label>
              <input
                type="email"
                className="w-full p-2 rounded-lg border"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <button className="bg-purple-800 text-white w-full py-2 font-semibold rounded-lg hover:bg-purple-700">
              Continuar
            </button>
          </form>
          <Link to="/register">¿No tienes una cuenta?</Link>
          <div className="flex items-center justify-between mb-6 mt-6">
            <div className="border-t border-gray-300 w-1/2"></div>
            <span className="text-gray-800 mx-3">O</span>
            <div className="border-t border-gray-300 w-1/2"></div>
          </div>

          <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center mb-3">
            <img
              src="icons/google.svg"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Continua con Google
          </button>

          <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center mb-3">
            <img
              src="icons/twitter.svg"
              alt="X Icon"
              className="w-5 h-5 mr-2"
            />
            Continua con X
          </button>

          <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center mb-3">
            <img
              src="icons/facebook.svg"
              alt="Facebook Icon"
              className="w-5 h-5 mr-2"
            />
            Continua con Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
