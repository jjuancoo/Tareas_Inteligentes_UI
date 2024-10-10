import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Exit from './Dashboard/Exit'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div class="flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                <div class="fixed flex flex-col top-0 left-0 w-64 bg-gray-100 h-full border-r">
                    <div class="overflow-y-auto overflow-x-hidden flex-grow">
                        <ul class="flex flex-col py-4 space-y-1">
                            <li class="px-5">
                                <div class="flex flex-row items-center h-8">
                                    <div class="text-2xl font-bold tracking-wide text-gray-900">Taski</div>
                                </div>
                            </li>
                            <li>
                                <Link to='/dashboard' class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <span class="material-symbols-rounded">
                                            home
                                        </span>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/tasks" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <span class="material-symbols-rounded">
                                            task
                                        </span>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Tareas</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/workspaces' class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <span class="material-symbols-rounded">
                                        workspaces
                                        </span>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Mesas de Trabajo</span>
                                    <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                                </Link>
                            </li>
                            <li>
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <span class="material-symbols-rounded">
                                            message
                                        </span>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Mensajes</span>
                                </a>
                            </li>
                            <li>
                                <Link to='/dashboard/notifications' class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <span class="material-symbols-rounded">
                                            notifications
                                        </span>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Notificaciones</span>
                                    <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                                </Link>
                            </li>
                            <li class="px-5">
                                <div class="flex flex-row items-center h-8">
                                    <div class="text-sm font-light tracking-wide text-gray-500">Configuración</div>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <span class="material-symbols-rounded">
                                            person
                                        </span>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Perfil</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <span class="material-symbols-rounded">
                                            settings
                                        </span>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Configuración</span>
                                </a>
                            </li>
                            <li>
                                <button 
                                    class="relative flex flex-row items-center h-11 focus:outline-none w-full hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                                >
                                    <Exit
                                        isOpen={isOpen}
                                    />                                        
                                    <Link to="/">

                                        <span class="inline-flex justify-center items-center ml-4">
                                            <span class="material-symbols-rounded">
                                                logout
                                            </span>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">Cerrar Sesión</span>
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
