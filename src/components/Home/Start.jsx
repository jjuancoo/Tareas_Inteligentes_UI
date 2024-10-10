import React from 'react'
import { Link } from 'react-router-dom'
import "material-symbols";

const Start = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl font-bold mb-2">
            ¿Listo para aumentar tu productividad?
          </h1>
          <p className="text-center text-xl text-gray-500">
            Únete a miles de equipos que ya están usando Taski para lograr más
            en menos tiempo.
          </p>
          <Link
            to="/signup"
            className="bg-gray-800 mt-4 text-white py-2 px-8 rounded-lg hover:bg-gray-700 flex items-center font-semibold"
          >
            Comieza tu recorrido por Taski
            <span className="material-symbols-rounded ml-2">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Start