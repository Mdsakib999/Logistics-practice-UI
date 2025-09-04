const CustomeBtn = ({ children }) => {
  return (
    <button className="flex items-center bg-blue-900 text-white font-medium shadow-md hover:bg-violet-700 transition duration-300 ease-in-out mt-2 px-6 py-3 rounded-md">
      <span className="text-center font-semibold text-lg whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};

export default CustomeBtn;
