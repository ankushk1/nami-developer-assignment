const TaskDetails = () => {
  return (
    <div className="flex flex-col p-3 mt-3 w-full text-xs bg-neutral-100">
      <div className="flex gap-2 whitespace-nowrap">
        <div className="font-bold text-stone-950">Shampoo</div>
        <div className="text-zinc-600">x1</div>
      </div>
      <div className="flex gap-2 mt-3 whitespace-nowrap">
        <div className="font-bold text-stone-950">Conditioner</div>
        <div className="text-zinc-600">x2</div>
      </div>
      <div className="mt-3 text-indigo-500">
        <span className="font-medium text-indigo-500">Instructions:</span>{" "}
        <span className="font-medium text-indigo-500">
          Please get conditioners.
        </span>
      </div>
      <div className="flex gap-2 mt-3 whitespace-nowrap">
        <div className="font-bold text-stone-950">Towel</div>
        <div className="text-zinc-600">x2</div>
      </div>
    </div>
  );
};

export default TaskDetails;
