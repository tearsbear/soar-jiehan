import React from "react";

const BalanceHistorySkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-[25px] p-5 shadow-sm h-full">
      <div className="h-[200px] relative mt-5">
        {/* Y-axis values */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-400">
          {[800, 600, 400, 200, 0].map((_, index) => (
            <div
              key={index}
              className="w-10 h-3 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pl-14">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="w-full h-[1px] bg-gray-100"
              style={{
                opacity: index === 4 ? 0 : 1,
              }}
            ></div>
          ))}

          {/* Area chart skeleton */}
          <svg className="absolute inset-0 mt-4" preserveAspectRatio="none">
            <defs>
              <linearGradient id="skeletonGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4D7CFE" stopOpacity="0.15" />
                <stop offset="95%" stopColor="#4D7CFE" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <path
              d={`
                M 0 180
                C 100 160, 150 100, 200 80
                C 250 60, 300 120, 400 100
                C 500 80, 550 140, 600 120
                L 600 200
                L 0 200
                Z
              `}
              fill="url(#skeletonGradient)"
              className="animate-pulse"
            />
            <path
              d={`
                M 0 180
                C 100 160, 150 100, 200 80
                C 250 60, 300 120, 400 100
                C 500 80, 550 140, 600 120
              `}
              fill="none"
              stroke="#4D7CFE"
              strokeWidth="3"
              strokeOpacity="0.2"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* X-axis months */}
        <div className="absolute bottom-0 left-14 right-0 flex justify-between">
          {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map((_, index) => (
            <div
              key={index}
              className="w-8 h-3 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BalanceHistorySkeleton;
