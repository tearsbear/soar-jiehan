import React from "react";

const CardSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse rounded-[25px] h-[235px] overflow-hidden flex flex-col justify-between bg-white border border-skyLight">
      <div className="p-5 px-6 flex-1 flex flex-col gap-8">
        <div className="flex justify-between items-start">
          <div>
            <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
          </div>
          <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
        </div>

        <div className="flex gap-10 items-start">
          <div>
            <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-28 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 flex justify-between items-center bg-white border-t">
        <div className="h-5 w-48 bg-gray-300 rounded"></div>
        <div className="w-12 h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
