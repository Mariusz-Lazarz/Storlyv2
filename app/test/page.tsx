const TestPage = () => {
  return (
    <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="h-[500px] bg-red-400" key={index}></div>
      ))}
    </div>
  );
};

export default TestPage;
