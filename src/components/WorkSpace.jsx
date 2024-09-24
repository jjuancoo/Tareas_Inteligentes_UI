import React from "react";
import { Link } from "react-router-dom";
import "material-symbols";

const WorkSpace = () => {
  return (
    <div>
      <div className="px-4 py-2 rounded-lg">
        <h1 className="m-2 text-2xl font-bold">Mesas de Trabajo</h1>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <Link className="border rounded-lg px-6 h-48 shadow hover:shadow-md">
            <h2 className="font-semibold text-2xl text-left mt-5">
              Planificación Q3
            </h2>
            <p className="text-gray-500 mb-8">
              Estrategia y Objetivos{" "}
            </p>
            <div className="flex space-x-1">
                <span className="material-symbols-rounded mb-2">group</span>
                <p className="text-gray-600">5 miembros</p>
            </div>
            <p className="text-gray-600">Ultima actualización: ayer</p>
          </Link>

          <Link className="border rounded-lg px-6 h-48 shadow hover:shadow-md">
            <h2 className="font-semibold text-2xl text-left mt-5">
              Diseño de UI
            </h2>
            <p className="text-gray-500 mb-8">
              Nueva Interfaz de Usuario{" "}
            </p>
            <div className="flex space-x-1">
                <span className="material-symbols-rounded mb-2">group</span>
                <p className="text-gray-600">3 miembros</p>
            </div>
            <p className="text-gray-600">Ultima actualización: hace 2 días</p>
          </Link>

          <Link className="border rounded-lg px-6 h-48 shadow hover:shadow-md">
            <h2 className="font-semibold text-2xl text-left mt-5">
              Brainstorming
            </h2>
            <p className="text-gray-500 mb-8">
              Nuevas Caracteristicas del Producto{" "}
            </p>
            <div className="flex space-x-1">
                <span className="material-symbols-rounded mb-2">group</span>
                <p className="text-gray-600">7 miembros</p>
            </div>
            <p className="text-gray-600">Ultima actualización: hace 3 horas</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
