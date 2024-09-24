import React from "react";
import { Link } from "react-router-dom";

const Task = () => {
  return (
    <div>
      <div className="px-4 rounded-lg">
        <h1 className="m-2 text-2xl font-bold">Tareas</h1>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="border rounded-lg px-6 h-64">
            <h2 className="font-bold text-2xl text-left mt-6">
              Terminar el Front-End
            </h2>
            <p className="text-gray-500 mb-8">
              Se tiene que hacer de esta forma{" "}
            </p>
            <div className="flex justify-between">
              <span className="">Creada: 12 de Octube del 2020</span>
              <span className="">
                <span className="px-2 bg-green-200 rounded-2xl text-green-700">
                  Completada
                </span>
              </span>
            </div>
            <div className="space-x-2 mt-10">
              <button
                //onClick={() => navigate(`/edit/${task.id}`)}
                className="bg-gray-800 text-white px-2 rounded-lg"
              >
                Editar
              </button>
              <button
                //onClick={() => deleteTask(task.id)}
                className="border-2 border-gray-400 text-gray-800 px-2 rounded-lg"
              >
                Eliminar
              </button>
              <button
                //onClick={() => handleDone(task.id)}
                className="hover:underline"
              >
                Tarea no completa
              </button>
            </div>
          </div>

          <div className="border rounded-lg px-6 h-64">
            <h2 className="font-bold text-2xl text-left mt-6">
              Terminar el Front-End
            </h2>
            <p className="text-gray-500 mb-8">
              Se tiene que hacer de esta forma{" "}
            </p>
            <div className="flex justify-between">
              <span className="">Creada: 12 de Octube del 2020</span>
              <span className="">
                <span className="px-2 bg-green-200 rounded-2xl text-green-700">
                  Completada
                </span>
              </span>
            </div>
            <div className="space-x-2 mt-10">
              <button
                //onClick={() => navigate(`/edit/${task.id}`)}
                className="bg-gray-800 text-white px-2 rounded-lg"
              >
                Editar
              </button>
              <button
                //onClick={() => deleteTask(task.id)}
                className="border-2 border-gray-400 text-gray-800 px-2 rounded-lg"
              >
                Eliminar
              </button>
              <button
                //onClick={() => handleDone(task.id)}
                className="hover:underline"
              >
                Tarea no completa
              </button>
            </div>
          </div>

          <div className="border rounded-lg px-6 h-64">
            <h2 className="font-bold text-2xl text-left mt-6">
              Terminar el Front-End
            </h2>
            <p className="text-gray-500 mb-8">
              Se tiene que hacer de esta forma{" "}
            </p>
            <div className="flex justify-between">
              <span className="">Creada: 12 de Octube del 2020</span>
              <span className="">
                <span className="px-2 bg-green-200 rounded-2xl text-green-700">
                  Completada
                </span>
              </span>
            </div>
            <div className="space-x-2 mt-10">
              <button
                //onClick={() => navigate(`/edit/${task.id}`)}
                className="bg-gray-800 text-white px-2 rounded-lg"
              >
                Editar
              </button>
              <button
                //onClick={() => deleteTask(task.id)}
                className="border-2 border-gray-400 text-gray-800 px-2 rounded-lg"
              >
                Eliminar
              </button>
              <button
                //onClick={() => handleDone(task.id)}
                className="hover:underline"
              >
                Tarea no completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
