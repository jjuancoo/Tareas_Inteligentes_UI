import React from 'react'
import { Link } from 'react-router-dom'
import "material-symbols";
import NavBar from '../components/Home/NavBar'
import Footer from '../components/Home/Footer';
import Characteristics from '../components/Home/Characteristics';
import Start from '../components/Home/Start';
import Information from '../components/Home/Information';

const Home = () => {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white '>
      <NavBar />
      <div className="space-y-48 ">
        <div className="py-8 mt-16 mb-16">
          <h1 className="text-6xl text-center font-bold">
            Tu espacio de trabajo colaborativo.
          </h1>
          <h1 className="text-6xl text-center text-blue-600 font-bold">
            Todo en uno. Totalmente gratis.
          </h1>
          <p className="text-center mt-4 text-xl text-gray-500">
            Organiza tareas, colabora en tiempo real y potencia la productividad
            de
            <br /> tu equipo con Taski. Sin costos ocultos, sin límites.
          </p>

          <div className="flex justify-center mt-8 space-x-2">
            <Link
              to="/signup"
              className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 flex items-center transition hover:delay-150 duration-300 ease-in-out"
            >
              Comieza ahora
              <span className="material-symbols-rounded ml-2">
                arrow_right_alt
              </span>
            </Link>
            <Link
              to="/dashboard"
              className="py-2 px-6 flex font-semibold items-center rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Ver demo
            </Link>
          </div>
        </div>
        <Characteristics />
        <Information/>
        <Start/>
        <Footer/>
      </div>
    </div>
    </>
  );
}

export default Home
