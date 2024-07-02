const AverageOrderValue = () => {
  return (
    <div className="p-4 flex flex-col gap-4 h-full text-center">
      <span className="text-2xl">Average Order Value</span>
      <span className="mt-6 text-4xl">$2000,99</span>
      <span className="mt-auto text-red-500">
        -18% <span className="text-white">compared to next week</span>
      </span>
    </div>
  );
};

export default AverageOrderValue;
