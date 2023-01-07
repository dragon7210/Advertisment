const Input = ({ placeholder, onChange, type, value }) => {
  return (
    <div className="flex w-full mt-8">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;
