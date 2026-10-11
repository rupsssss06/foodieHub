const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 px-7.5 py-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="h-65 w-55 animate-pulse rounded-2xl bg-gray-200"
        />
      ))}
    </div>
  );
};

export default Shimmer;
