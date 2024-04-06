import React from "react";

const TopNav = () => {
  return (
    <nav className="flex h-[104px] items-center justify-between px-5 py-2 border-b border-color-default-grey">
      <div className="font-semibold text-4xl">ABCHotel</div>
      <div className="inline-flex items-start gap-[40px] ">
        <img
          className="w-[48px] h-[48px]"
          alt="Bell"
          src="https://c.animaapp.com/iHWdfbuT/img/notification.svg"
        />
        <img
          className="w-[48px] h-[48px]"
          alt="Profile Icon"
          src="https://c.animaapp.com/iHWdfbuT/img/ellipse-185@2x.png"
        />
      </div>
    </nav>
  );
};

export default TopNav;
