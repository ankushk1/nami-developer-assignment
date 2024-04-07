import homeIcon from "/icons/home_icon.svg";
import consoleIcon from "/icons/console.svg";
import plusIcon from "/icons/plus.svg";

const MobileFooter = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center self-center px-3 w-14 h-14 bg-indigo-500 rounded-[48px] plus-icon">
        <img src={plusIcon} alt="plus_icon" className="w-full aspect-square" />
      </div>
      <div className="flex gap-1 justify-center px-4 py-3 text-xs font-medium bg-white rounded-tl-xl rounded-tr-xl shadow-lg">
        <div className="flex flex-col flex-1 px-16 text-indigo-500 items-center">
          <img src={homeIcon} alt="home" className="self-center aspect-[2]" />
          <div className="mt-1">Home</div>
        </div>
        <div className="flex flex-col flex-1 px-16 items-center ">
          <img
            src={consoleIcon}
            alt="console"
            className="self-center aspect-[2] "
          />
          <div className="mt-1">Console</div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
