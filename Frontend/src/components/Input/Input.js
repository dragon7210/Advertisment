const Input = ({ label, placeholder, onChange, type }) => {
  return (
    <div className="flex w-full mt-5">
      <p className="text-8 my-auto w-[220px]">{label}</p>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;
