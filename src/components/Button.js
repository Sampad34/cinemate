export const Button = ({ children }) => {
  return (
    <button
      className="w-full sm:w-64 px-5 py-3 
                 text-base sm:text-lg md:text-xl font-medium 
                 text-white rounded-xl 
                 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                 shadow-md hover:shadow-lg 
                 hover:scale-105 active:scale-95 
                 transition-all duration-300 ease-in-out 
                 mr-2 mb-2"
    >
      {children}
    </button>
  );
};
