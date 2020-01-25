import React from "react";
import "./home.styles.scss";
import RecentJoin from "../../components/recent-join/recent-join.component";
import Employees from "../../components/employees/employees.component";

const Home = () => {
  return (
    <div className="home">
      <Employees />
      <RecentJoin />
    </div>
  );
};

export default Home;
