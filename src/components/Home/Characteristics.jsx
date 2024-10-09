import React from 'react'

const Characteristics = () => {
  return (
    <>
    <div>
        <h1 className='text-center font-bold text-3xl'>Caracteristicas que impulsan tu productividad</h1>
        <div className='grid grid-cols-4 mx-8 mt-8 space-x-8'>
            <div className='border-2 rounded-lg px-6 h-48 flex flex-col justify-center items-center shadow-sm'>
                <img src='icons/tarea-lista.svg' alt='Estadisticas'/>
                <h2 className='text-center font-semibold text-2xl'>Gestión de tareas</h2>
                <p className='text-gray-500 text-lg text-center mt-2'>Organiza y prioriza tu trabajo con facilidad.</p>
            </div>

            <div className='border-2 rounded-lg px-6 h-48 flex flex-col justify-center items-center shadow-sm'>
                <img src='icons/equipo.svg' alt='Estadisticas'/>
                <h2 className='text-center font-semibold text-2xl'>Colaboración en equipo</h2>
                <p className='text-gray-500 text-lg text-center mt-2'>Trabaja junto a tu equipo en tiempo real.</p>
            </div>

            <div className='border-2 rounded-lg px-6 h-48 flex flex-col justify-center items-center shadow-sm'>
                <img src='icons/calendario.svg' alt='Estadisticas'/>
                <h2 className='text-center font-semibold text-2xl'>Planifica tus proyectos</h2>
                <p className='text-gray-500 text-lg text-center mt-2'>Visualiza y gestiona el progreso de tus proyectos.</p>
            </div>

            <div className='border-2 rounded-lg px-6 h-48 flex flex-col justify-center items-center shadow-sm'>
                <img src='icons/estadisticas.svg' alt='Estadisticas'/>
                <h2 className='text-center font-semibold text-2xl'>Gestión de tareas</h2>
                <p className='text-gray-500 text-lg text-center mt-2'>Organiza y prioriza tu trabajo con facilidad.</p>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Characteristics