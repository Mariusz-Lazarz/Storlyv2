const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="h-10 w-10 border-4 border-t-4 border-t-transparent border-gray-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
