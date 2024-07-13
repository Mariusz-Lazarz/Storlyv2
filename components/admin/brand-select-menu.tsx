const BrandSelectMenu = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <select
      name="brand"
      id="brand"
      required
      defaultValue={defaultValue}
      className="bg-white w-full border-[0.5px] p-2 rounded-lg outline-none cursor-pointer text-sm"
    >
      <option value="new balance" className="bg-white p-2 cursor-pointer">
        New Balance
      </option>
      <option value="rebook" className="bg-white p-2 cursor-pointer">
        Rebook
      </option>
      <option value="under armour" className="bg-white p-2 cursor-pointer">
        Under Armour
      </option>
      <option value="nike" className="bg-white p-2 cursor-pointer">
        Nike
      </option>
      <option value="addidas" className="bg-white p-2 cursor-pointer">
        Addidas
      </option>
      <option value="puma" className="bg-white p-2 cursor-pointer">
        Puma
      </option>
    </select>
  );
};

export default BrandSelectMenu;
