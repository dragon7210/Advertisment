const Input = ({ placeholder, onChange, type, value }) => {
  return (
    <div className="flex w-[100%] sm:w-[100%]  mt-8 justify-center">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline text-[12px] sm:text-[18px] bg-transparent"
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;
