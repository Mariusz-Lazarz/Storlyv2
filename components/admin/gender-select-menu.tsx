const GenderSelectMenu = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <select
      name="gender"
      id="gender"
      required
      defaultValue={defaultValue}
      className="bg-white w-full border-[0.5px] p-2 rounded-lg outline-none cursor-pointer text-sm"
    >
      <option value="man" className="bg-white p-2 cursor-pointer">
        Man
      </option>
      <option value="woman" className="bg-white p-2 cursor-pointer">
        Woman
      </option>
      <option value="unisex" className="bg-white p-2 cursor-pointer">
        Unisex
      </option>
    </select>
  );
};

export default GenderSelectMenu;
