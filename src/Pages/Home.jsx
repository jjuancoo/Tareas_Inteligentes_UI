import React from 'react'
import { Link } from 'react-router-dom'
import "material-symbols";
import NavBar from '../components/Home/NavBar'
import Footer from '../components/Home/Footer';
import Characteristics from '../components/Home/Characteristics';

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

        <div className="mt-12">
          <h1 className="text-3xl text-center font-bold my-8">
            Todo lo que necesitas para colaborar eficientemente
          </h1>
          <div className="grid grid-cols-3 p-4 ml-4">
            <div className="mb-6">
              <span className="material-symbols-rounded ml-2">task_alt</span>
              <h2 className="font-semibold text-xl">
                Gestión de tareas intuitiva
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Organiza y prioriza el trabajo de tu equipo con nuestra interfaz
                drag-and-drop fácil de usar.
              </p>
            </div>

            <div className="mb-6">
              <span className="material-symbols-rounded ml-2">group</span>
              <h2 className="font-semibold text-xl">
                Colaboración en tiempo real
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Trabaja simultáneamente con tu equipo en documentos, tareas y
                proyectos sin conflictos.
              </p>
            </div>

            <div className="mb-6">
              <span className="material-symbols-rounded ml-2">
                calendar_today
              </span>
              <h2 className="font-semibold text-xl">Calendario integrado</h2>
              <p className="mt-4 text-gray-500 text-lg">
                Sincroniza deadlines, eventos y reuniones directamente con tus
                tareas y proyectos.
              </p>
            </div>

            <div className="mt-10">
              <span className="material-symbols-rounded ml-2">equalizer</span>
              <h2 className="font-semibold text-xl">Análisis y reportes</h2>
              <p className="mt-4 text-gray-500 text-lg">
                Organiza y prioriza el trabajo de tu equipo con nuestra interfaz
                drag-and-drop fácil de usar.
              </p>
            </div>

            <div className="mt-10">
              <span className="material-symbols-rounded ml-2">neurology</span>
              <h2 className="font-semibold text-xl">
                Personalización avanzada
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Adapta Taski a tus necesidades con vistas personalizadas, campos
                y flujos de trabajo.
              </p>
            </div>

            <div className="mt-10">
              <span className="material-symbols-rounded ml-2">bolt</span>
              <h2 className="font-semibold text-xl">Integraciones potentes</h2>
              <p className="mt-4 text-gray-500 text-lg">
                Conecta Taski con tus herramientas favoritas para un flujo de
                trabajo sin interrupciones.
              </p>
            </div>
          </div>
        </div>

        <Characteristics />
        <Footer/>
      </div>
    </div>
    </>
  );
}

export default Home
