const Input = ({ placeholder, onChange, type, value }) => {
  return (
    <div className="flex w-full mt-8">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        onChange={onChange}
        type={type}
<<<<<<< HEAD
        value={value}        
=======
        value={value}
>>>>>>> 31d862c62e97d603b74fb527d97fd1feea878d1d
      />
    </div>
  );
};

export default Input;
