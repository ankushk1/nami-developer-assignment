import React from "react";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import TaskCard from "../components/taskCard/TaskCard";
import { tasksData } from "../utils/tasksData";

const statusArr: string[] = [
  "Not Accepted",
  "Ongoing",
  "Scheduled",
  "Completed",
  "Delayed",
  "Ontime"
];

const MainPage = () => {
  return (
    <div className="main-page-container">
      <TopNav />
      <div className="row px-2 mt-4 ">
        <SideNav />
        <main className="col-sm-12 col-md-10 lg:ml-5xl:ml-8  md:ml-3">
          <div className="text-2xl font-semibold">Tasks of the Day</div>
          <div className="status-list my-6 flex flex-wrap gap-2">
            {statusArr.map((status, idx) => (
              <div
                key={`status_${idx}`}
                className="px-[10px] py-[4px] rounded-[20px] border border-secondary cursor-pointer"
              >
                {status}
              </div>
            ))}
          </div>
          <div className="tasks-container ">
            <div className="row g-4 page-layout">
              {tasksData.map((task, idx) => (
                <TaskCard key={`task_${idx}`} {...task} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainPage;
