import React from "react";
import { pieChartData } from "../../data/dummy";
import { Header, Pie as PieChart } from "../../components";

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Costs by Type" />
      <div className="w-11/12">
        <PieChart id="pie-chart" data={pieChartData} legendVisibility height="full"/>
      </div>
    </div>
  );
};

export default Pie;
