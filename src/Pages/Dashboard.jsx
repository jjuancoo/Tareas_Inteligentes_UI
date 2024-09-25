import React from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Categories from "../components/Categories";
import Task from "../components/Task";
import WorkSpace from "../components/WorkSpace";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <div className="p-4 sm:ml-64">
        <Categories />
        <Task/>
        <WorkSpace />
      </div>
    </>
  );
};

export default Dashboard;
