const CustomeBtn = ({ children }) => {
  return (
    <button
      className="relative flex items-center bg-blue-900 text-white font-medium shadow-md 
      hover:bg-violet-900 transition duration-300 ease-in-out mt-2 px-8 py-3 
      overflow-hidden group cursor-pointer"
    >
      <span className="text-center font-semibold text-lg whitespace-nowrap ">
        {children}
      </span>

      {/* Right-bottom round corner */}
      <span
        className="absolute -bottom-5 -right-5 w-11 h-11 rounded-full 
        bg-gray-200 transition-colors duration-300 ease-in-out 
        group-hover:bg-yellow-400"
      ></span>
    </button>
  );
};

export default CustomeBtn;
