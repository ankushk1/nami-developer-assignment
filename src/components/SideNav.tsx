import homeIcon from "/icons/home_icon.svg";
import consoleIcon from "/icons/console.svg";
import downArrowIcon from "/icons/down_arrow.svg";
import overviewIcon from "/icons/overview.svg";
import staffIcon from "/icons/staff.svg";
import attendanceIcon from "/icons/attendance.svg";

interface NavItem {
  icon: string;
  route: string;
}

const SideNav = () => {
  const navList: NavItem[] = [
    {
      icon: attendanceIcon,
      route: "Attendance"
    },
    {
      icon: overviewIcon,
      route: "Overview"
    },
    {
      icon: staffIcon,
      route: "Staff"
    }
  ];

  return (
    <aside className="d-none d-lg-block col-2">
      <div className="flex flex-col pb-20 font-semibold max-w-[300px]">
        <div className="flex gap-3 px-8 py-3 mt-1.5 border-orange-600 border-solid bg-zinc-100 border-b-[5px]">
          <img src={homeIcon} alt="home" className="w-6 aspect-square" />
          <div className="my-auto">Home</div>
        </div>
        <div className="flex gap-0.5 mt-6">
          <img
            src={downArrowIcon}
            alt="down_arrow"
            className="w-6 aspect-square"
          />
          <div className="flex gap-3 pr-5">
            <img
              src={consoleIcon}
              alt="console"
              className="w-6 aspect-square"
            />
            <div className="my-auto">Console</div>
          </div>
        </div>
        {navList.map((nav, idx) => (
          <div key={`nav_${idx}`} className="flex gap-3 px-10 py-2 mt-6">
            <img
              src={nav.icon}
              alt={"nav_icon"}
              className="w-6 aspect-square"
            />
            <div className="my-auto">{nav.route}</div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
