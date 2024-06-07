const LoadingBar = () => {
  return (
    <div className="flex space-x-2 justify-center items-center mt-20 bg-white dark:invert">
      <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
    </div>
  );
};

export default LoadingBar;
