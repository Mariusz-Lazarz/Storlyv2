"use client";

const ErrorBoundary = () => {
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="text-center mb-44">
          <h2 className="text-5xl">Ooops!!</h2>
          <p>Something went very very wrong!!!</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
