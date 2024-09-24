import React from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Categories from "../components/Categories";
import Task from "../components/Task";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Categories />
        <Task/>
      </div>
    </>
  );
};

export default Dashboard;
