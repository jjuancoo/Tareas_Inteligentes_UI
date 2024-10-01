import React from 'react'
import "material-symbols";
import Sidebar from '../../components/Sidebar'

const Notifications = () => {
  return (
    <>
      <Sidebar />
      <div className="p-6 sm:ml-64">
        <div className="flex justify-center items-center">
          <div className="w-2/3">
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-row">
                <span className="material-symbols-rounded mx-2">
                  notifications
                </span>
                <h1 className="font-bold text-3xl">Notificaciones</h1>
              </div>
              <div className="mx-8">
                <button className='bg-gray-900 px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-100'>Marcar todas como leidas</button>
              </div>
            </div>

            <div className='mt-6 mb-6'>
                <input className='w-full p-2 rounded-lg border mx-2' placeholder='Buscar notificaciones...'/>
                {/* <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select> */}
            </div>

            <div className=''>
                <div>
                  <h1 className='font-semibold text-center text-gray-500'>Sin notificaciones</h1>  
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications