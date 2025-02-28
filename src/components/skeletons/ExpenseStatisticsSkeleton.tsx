import React from "react";

const ExpenseStatisticsSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-[25px] p-5 shadow-sm h-full flex items-center justify-center">
      <div className="relative w-[220px] h-[220px] animate-pulse">
        {/* Circular segments */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="10"
            className="animate-pulse"
          />
          {/* Segment placeholders with different stroke-dasharray and stroke-dashoffset */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#F3F4F6"
            strokeWidth="10"
            strokeDasharray="70 283"
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
            className="animate-pulse"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="10"
            strokeDasharray="60 283"
            strokeDashoffset="-70"
            transform="rotate(-90 50 50)"
            className="animate-pulse"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#F3F4F6"
            strokeWidth="10"
            strokeDasharray="80 283"
            strokeDashoffset="-130"
            transform="rotate(-90 50 50)"
            className="animate-pulse"
          />
        </svg>

        {/* Center placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseStatisticsSkeleton;
