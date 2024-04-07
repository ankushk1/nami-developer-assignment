import "./taskCard.css";
import spoonIcon from "/icons/spoon.svg";
import calenderIcon from "/icons/calender.svg";
import oneIcon from "/icons/one.svg";
import starIcon from "/icons/star.svg";
import repeatIcon from "/icons/repeat.svg";
import clockIcon from "/icons/clock.svg";
import redClockIcon from "/icons/red_clock.svg";
import checkIcon from "/icons/check.svg";
import { ITask } from "../../utils/tasksData";
import TaskDetails from "./TaskDetails";

const TaskCard = ({
  taskStatus,
  taskRepeat,
  taskType,
  btnText,
  pendingStatus,
  rating,
  details
}: ITask) => {
  const getButtonJSX = (type: string): JSX.Element | undefined => {
    switch (type) {
      case "Not Accepted":
        return (
          <div className="justify-center self-stretch px-1 px-sm-2 py-1 text-xs font-medium text-dark-red rounded-3xl bg-neutral-100">
            Not Accepted
          </div>
        );
      case "Delayed":
        return (
          <div className="justify-center py-1 text-xs font-medium text-white px-2  bg-dark-red rounded-3xl">
            Delayed
          </div>
        );
      case "Complaint":
        return (
          <div className="justify-center py-1 text-xs font-medium text-white px-2  bg-dark-red rounded-3xl">
            Complaint
          </div>
        );
      case "Ongoing":
        return (
          <div className="justify-center self-stretch px-2 py-1 text-xs font-medium text-light-yellow rounded-3xl bg-neutral-100">
            On-going
          </div>
        );
      case "On-Time":
        return (
          <div className="justify-center py-1 text-xs font-medium text-white px-1 px-sm-2 bg-dark-green rounded-3xl">
            On-time
          </div>
        );
      default:
        return;
    }
  };

  return (
    <div className="col-12 col-md-5 col-xxl-4">
      <div className="flex flex-col p-2 rounded-xl card-border max-w-[390px]">
        <div className="flex gap-3 gap-sm-4 justify-between w-full">
          <div className="flex gap-1 items-center">
            <div className="flex gap-1.5 self-stretch px-1 py-0.5 my-auto text-xs font-semibold whitespace-nowrap rounded bg-neutral-100 ">
              <img src={spoonIcon} alt="icon" className="w-4 aspect-square" />
              <div>Rajesh</div>
              <div className="my-auto w-2 h-2 bg-red-700 rounded-full" />
            </div>
            {taskStatus.map((task) => getButtonJSX(task))}
            {!rating.rated && (
              <div className="flex justify-center items-center self-stretch px-1 py-0.5 my-auto rounded-3xl bg-neutral-100">
                <img
                  src={taskRepeat ? repeatIcon : oneIcon}
                  alt="icon"
                  className="w-4 aspect-square"
                />
              </div>
            )}
          </div>
          {pendingStatus.pending && (
            <div
              className={`flex gap-1 self-start px-1 py-0.5 text-sm font-medium  whitespace-nowrap 
            ${
              pendingStatus.taskTime < 5
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-600"
            }
          rounded-3xl`}
            >
              <img
                src={pendingStatus.taskTime < 5 ? redClockIcon : clockIcon}
                alt="icon"
                className=" w-4 aspect-square"
              />
              <div>{pendingStatus.taskTime}min</div>
            </div>
          )}
          {rating.rated && (
            <div
              className={`flex gap-1 self-start px-2 py-0.5 text-sm font-medium text-white whitespace-nowrap 
          ${rating.star < 2 ? "bg-dark-red" : "bg-dark-green"}
        rounded-3xl`}
            >
              <span className="text-[14px]">{rating.star}</span>
              <img src={starIcon} alt="icon" className=" w-3 aspect-square" />
            </div>
          )}
        </div>
        <div className="flex gap-4 mt-3">
          <div className="flex-1 font-semibold ">Routine Cleaning</div>
          <div
            className={`${
              taskType === "Internal Task"
                ? "text-light-purple"
                : "text-light-orange"
            } justify-center px-2 py-1 text-xs font-medium  rounded-3xl bg-neutral-100`}
          >
            {taskType}
          </div>
        </div>
        <div className="flex gap-4 justify-between mt-3 w-full text-xs font-medium text-neutral-500">
          <div className="flex gap-1.5">
            <img src={calenderIcon} alt="icon" className="w-4 aspect-square" />
            <div> 21 Jul 2024 | 03:00 am</div>
          </div>
          <div># 68988</div>
        </div>
        <div className="flex gap-0.5 justify-between mt-3 text-xs font-semibold whitespace-nowrap text-neutral-500">
          <div>From:Pantry</div>
          <div>To:Reception</div>
        </div>
        {details && <TaskDetails />}
        {btnText === "Notify Staff" ? (
          <div className="flex justify-center items-center px-3 py-2 mt-3 w-full text-xs font-medium text-rose-50 bg-indigo-500 rounded-3xl cursor-pointer">
            <div className="flex gap-2">
              <img src={checkIcon} alt="icon" className="w-5 aspect-square" />
              <div className="my-auto">Notify Staff</div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center px-3 py-2 mt-3 text-xs font-medium text-indigo-500 rounded-3xl border border-indigo-500 border-solid cursor-pointer">
            View Details
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
