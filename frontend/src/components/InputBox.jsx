

const InputBox = ({ IconComponent, formData, handleChange, ...props }) => {
  return (
    <div className="relative">
      <IconComponent className="absolute left-3 top-4 text-gray-400" />
      <input
        {...props}
        value={formData}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
       
        required
      />
    </div>
  );
};

export default InputBox;
