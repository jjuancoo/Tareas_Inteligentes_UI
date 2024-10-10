import React from 'react'
import "material-symbols";
import Sidebar from '../../components/Sidebar'

const Tasks = () => {
  return (
    <>
        <Sidebar/>
        <div className='p-6 sm:ml-64'><div>
            <h1 className='font-bold text-3xl mb-4'>Tareas</h1>
            <div>
              <button className='font-semibold text-white bg-gray-900 px-4 py-2 rounded-lg'>Añadir nueva tarea</button>
            </div>

            <div className='grid grid-cols-3 gap-4 mb-4'>
            </div>
        </div>
        </div>
    </>
  )
}

export default Tasks
