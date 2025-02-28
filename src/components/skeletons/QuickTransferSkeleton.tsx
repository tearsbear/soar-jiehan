import React from "react";

const QuickTransferSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-[25px] p-5 shadow-sm h-full">
      {/* Contact avatars */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[90px] mt-3 mb-5"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-gray-200 animate-pulse"></div>
              <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-12 h-2 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
      </div>

      {/* Select Contact placeholder */}
      <div className="mt-4 mb-4 flex gap-2 flex-row">
        <div className="w-5 h-12 bg-gray-200 rounded-full mb-2 animate-pulse"></div>
        <div className="w-full h-12 bg-gray-200 rounded-full mb-2 animate-pulse ml-auto"></div>
        <div className="w-32 h-12 bg-gray-200 rounded-full animate-pulse ml-auto"></div>
      </div>
    </div>
  );
};

export default QuickTransferSkeleton;
