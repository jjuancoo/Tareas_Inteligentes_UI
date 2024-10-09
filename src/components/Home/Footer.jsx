import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='bg-slate-200'>
        <div className='p-8'>
            <div className='grid grid-cols-3 p-2'>
                <div className='space-y-2'>
                    <h2 className='font-bold text-lg'>Taski</h2>
                    <p className=''>Simplificando la gestión de tareas y proyectos para equipos de todos los tamaños</p>
                </div>

                <div  className='space-y-2'>
                    <h2 className='font-bold text-lg'>Productos</h2>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Caractersticas</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Integraciones</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Precios</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Hoja de ruta</Link></li>
                    </ul>
                </div>

                <div className='space-y-2'>
                    <h2 className='font-bold text-lg'>Recursos</h2>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Blog</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Tutoriales</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Documentación</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Comunidad</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-gray-600 dark:text-gray-300">&copy; 2024 Taski. Todos los derechos reservados.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer