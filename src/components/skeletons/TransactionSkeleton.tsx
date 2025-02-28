import React from "react";

const TransactionSkeleton: React.FC = () => {
  return (
    <div className="flex items-center -mt-4 py-4 animate-pulse">
      {/* Icon placeholder */}
      <div className="w-14 h-14 bg-gray-200 rounded-full"></div>

      {/* Transaction details */}
      <div className="ml-4 flex-1">
        <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* Amount */}
      <div className="h-4 w-20 bg-gray-300 rounded"></div>
    </div>
  );
};

export default TransactionSkeleton;
