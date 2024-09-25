import React from 'react'
import { Link } from 'react-router-dom'
import "material-symbols";
import NavBar from '../components/Home/NavBar'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="py-8 mt-12">
        <h1 className="text-5xl text-center font-bold">
          Colabora, Organiza, Triunfa
        </h1>
        <p className="text-center mt-4 text-xl text-gray-500">
          Potencia tu equipo con nuestra plataforma de colaboración todo en uno.
          ¡Totalmente gratis!
        </p>

        <div className="flex justify-center mt-8">
          <Link
            to="/register"
            className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 flex items-center transition hover:delay-150 duration-300 ease-in-out"
          >
            Comieza ahora
            <span className="material-symbols-rounded ml-2">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home
