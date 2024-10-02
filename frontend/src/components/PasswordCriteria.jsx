import { FaCheck, FaTimes } from "react-icons/fa";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="mt-4 space-y-2">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center text-sm">
          {item.met ? (
            <FaCheck className="text-green-500 mr-2" />
          ) : (
            <FaTimes className="text-red-500 mr-2" />
          )}
          <span
            className={`${
              item.met ? "text-green-600" : "text-gray-500"
            } font-medium`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
export default PasswordCriteria;
