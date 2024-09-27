import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-1/4 mt-10'>
            <h1 className='text-9xl font-bold text-blue-600 text-center'>404</h1>
            <h1 className='font-bold text-3xl text-center mt-6'>Oops! Página no encontrada</h1>
            <p className='text-center text-gray-500 mt-4'>Lo sentimos la página que estas buscando no existe.</p>
            <p className='text-center text-gray-500'>Vuelve a la pagina principal y continua explorando.</p>
            <div className='mt-6 flex justify-center'>
                <Link to='/' className='bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-slate-700'>Ir a la página principal</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound
