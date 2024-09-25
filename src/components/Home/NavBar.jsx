import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='bg-gray-100 w-full flex justify-between items-center px-6 py-4 relative'>
            <h1 className='font-bold text-2xl'>Taski</h1>
            <div className='space-x-4'>
                <Link to='/login' className='font-semibold py-2 px-4 rounded-lg hover:bg-slate-200'>Iniciar Sesión</Link>
                <Link className='bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700'>Crear una cuenta</Link>
            </div>
        </nav>
    </>
  )
}

export default NavBar