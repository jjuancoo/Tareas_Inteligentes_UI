import React from "react";
import { Link } from "react-router-dom";
import "material-symbols";

const Categories = () => {
  return (
    <div>
      <div className="p-4 rounded-lg">
        <h1 className="py-3 px-1 text-2xl font-bold">Categorias</h1>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-gray-200 rounded-xl hover:bg-gray-300">
            <Link to='/dashboard/tasks' className="flex flex-col justify-center items-center h-32">
              <span className="material-symbols-rounded mb-2">task</span>
              <h1>Tareas</h1>
            </Link>
          </div>

          <div className="bg-gray-200 rounded-xl hover:bg-gray-300">
            <Link className="flex flex-col justify-center items-center h-32">
              <span className="material-symbols-rounded mb-2">workspaces</span>
              <h1>Workspaces</h1>
            </Link>
          </div>

          <div className="bg-gray-200 rounded-xl hover:bg-gray-300">
            <Link className="flex flex-col justify-center items-center h-32">
              <span className="material-symbols-rounded mb-2">groups</span>
              <h1>Colaboradores</h1>
            </Link>
          </div>

          <div className="bg-gray-200 rounded-xl hover:bg-gray-300">
            <Link className="flex flex-col justify-center items-center h-32">
              <span className="material-symbols-rounded mb-2">
                calendar_month
              </span>
              <h1>Calendario</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
