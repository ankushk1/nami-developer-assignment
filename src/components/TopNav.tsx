const TopNav = () => {
  return (
    <nav className="flex h-[104px] items-center justify-between px-5 py-2 border-b border-color-default-grey">
      <div className="font-semibold text-4xl">ABCHotel</div>
      <div className="inline-flex items-start gap-[40px] ">
        <img
          className="w-[48px] h-[48px]"
          alt="bell"
          src="/icons/Notification.svg"
        />
        <img
          className="w-[48px] h-[48px]"
          alt="profile_icon"
          src="/icons/profile.svg"
        />
      </div>
    </nav>
  );
};

export default TopNav;
