const MobileHeader = () => {
  return (
    <>
      <div className="flex gap-3 justify-between">
        <div className="my-auto text-base font-semibold">Tasks of the Day</div>
        <div className="flex gap-2 justify-end px-1">
          <img
            alt="search"
            src="/icons/search.svg"
            className="my-auto w-6 aspect-square"
          />
          <img
            alt="bell"
            src="/icons/Notification.svg"
            className="my-auto w-6 aspect-square"
          />
          <img
            alt="profile_icon"
            src="/icons/profile.svg"
            className="w-8 rounded-full aspect-square"
          />
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center px-2.5 py-2 text-xs font-semibold text-dark-red rounded-md shadow-sm bg-neutral-100">
        <div>Negative notification type description</div>
        <img alt="cross" src="/icons/cross.svg" className="w-5 aspect-square" />
      </div>
    </>
  );
};

export default MobileHeader;
