const TotalOrderCount = () => {
  return (
    <div className="p-4 flex flex-col gap-4 h-full text-center">
      <span className="text-2xl">Total Oders</span>
      <span className="mt-6 text-4xl">692</span>
      <span className="mt-auto text-green-500">
        +28% <span className="text-white">compared to next week</span>
      </span>
    </div>
  );
};

export default TotalOrderCount;
