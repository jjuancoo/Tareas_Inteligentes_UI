import React from "react";
import { Link } from "react-router-dom";
import "material-symbols";

const Categories = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg">
        <div class="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-gray-200 rounded-xl">
            <Link className="flex justify-center items-center h-32 ">
              <span className="material-symbols-rounded ">task</span>
              <h1 className="">Tareas</h1>
            </Link>
          </div>

          <div className="bg-gray-200 rounded-xl">
            <Link className="flex justify-center items-center h-32 ">
              <span className="material-symbols-rounded ">workspaces</span>
              <h1 className="">Workspaces</h1>
            </Link>
          </div>

          <div className="bg-gray-200 rounded-xl">
            <Link className="flex justify-center items-center h-32 ">
              <span className="material-symbols-rounded ">groups</span>
              <h1 className="">Colaboradores</h1>
            </Link>
          </div>

          <div className="bg-gray-200 rounded-xl">
            <Link className="flex justify-center items-center h-32 ">
              <span className="material-symbols-rounded ">calendar_month</span>
              <h1 className="">Calendario </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
