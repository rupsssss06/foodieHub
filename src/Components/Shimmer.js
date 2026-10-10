const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-x-2.5 gap-y-7.5 px-7.5 py-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="h-8.75 w-55 rounded-[18px] bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-size-[200%_100%] animate-shimmer"
        />
      ))}
    </div>
  );
};

export default Shimmer;
