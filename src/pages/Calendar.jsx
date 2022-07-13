import React from "react";
import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent eventSettings={{ dataSource: scheduleData }} height="650px" id="calendar">
        <Inject
          services={[Agenda, Day, DragAndDrop, Month, Resize, Week, WorkWeek]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
