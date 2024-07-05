interface TableBodyProps {
  navLabels: string[];
}

const TableNavLabels = ({ navLabels }: TableBodyProps) => {
  return (
    <div className="p-4 bg-orange-50 grid grid-cols-5 text-center">
      {navLabels.map((label) => (
        <span className="uppercase" key={label}>
          {label}
        </span>
      ))}
    </div>
  );
};

export default TableNavLabels;
