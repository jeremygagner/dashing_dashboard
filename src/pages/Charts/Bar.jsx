import React from "react";
import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {

  const { currentMode } = useStateContext();
  
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Number of Complaints"/>
      <ChartComponent
      id="bar-chart"
      height="420px"
      width="90%"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}
      legendSettings={
        currentMode === "Dark" ? { textStyle: { color: "#FFFFFF" } } : { textStyle: { color: "#000000" } }
      }
    >
      <Inject services={[Category, ColumnSeries, DataLabel, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item}/>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  );
};

export default Bar;
