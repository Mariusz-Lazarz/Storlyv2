const OrdersSekleton = () => {
  return (
    <div className="w-full h-96 flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="flex flex-row justify-between" key={index}>
          <div className="flex flex-row gap-4">
            <div className="w-24 h-6 bg-gray-500 animate-pulse"></div>
            <div className="w-24 h-6 bg-gray-500 animate-pulse"></div>
            <div className="w-36 h-6 bg-gray-500 animate-pulse"></div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-24 h-6 bg-gray-500 animate-pulse"></div>
            <div className="w-24 h-6 bg-gray-500 animate-pulse"></div>
          </div>
        </div>
      ))}

      <div className="flex flex-row justify-between">
        <div className="w-24 h-6 bg-gray-500 animate-pulse"></div>
        <div className="w-24 h-6 bg-gray-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default OrdersSekleton;
