import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import TaskCard from "../components/taskCard/TaskCard";
import { tasksData } from "../utils/tasksData";
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";
import "./mainPage.css";

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
      <div className="d-none d-lg-block">
        <TopNav />
      </div>
      <div className="d-block d-lg-none mt-3">
        <div className="w-[85%] mx-auto">
          <MobileHeader />
        </div>
      </div>
      <div className="mx-5 mx-lg-0">
        <div className="row px-2 mt-4 ">
          <SideNav />

          <main className="col-md-12 col-lg-10">
            <div className="text-2xl font-semibold d-none d-lg-block">
              Tasks of the Day
            </div>
            <div className="status-list my-6 flex flex-wrap gap-2 w-[80%]">
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
      <div className="footer-mobile w-full d-block d-lg-none">
        <MobileFooter />
      </div>
    </div>
  );
};

export default MainPage;
