const CategorySelectMenu = () => {
  return (
    <select
      name="category"
      id="category"
      required
      className="bg-white w-full border-[0.5px] p-2 rounded-lg outline-none cursor-pointer text-sm"
    >
      <option value="equipment" className="bg-white p-2 cursor-pointer">
        Equipment
      </option>
      <option value="clothing" className="bg-white p-2 cursor-pointer">
        Clothing
      </option>
      <option value="shoes" className="bg-white p-2 cursor-pointer">
        Shoes
      </option>
    </select>
  );
};

export default CategorySelectMenu;
