import React from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Categories from "../components/Categories";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div>
        <Sidebar />
        <Categories />
      </div>
    </>
  );
};

export default Dashboard;
