const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-x-[10px] gap-y-[30px] px-[30px] py-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="h-[350px] w-[220px] rounded-[18px] bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%] animate-shimmer"
        />
      ))}
    </div>
  );
};

export default Shimmer;
