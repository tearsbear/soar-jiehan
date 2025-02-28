import React from "react";

const WeeklyActivitySkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-[25px] p-5 shadow-sm h-full">
      {/* Legend */}
      <div className="flex justify-end items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4D7CFE]"></div>
          <div className="w-16 h-3 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2A2A2A]"></div>
          <div className="w-16 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="h-[220px] flex items-end justify-between gap-4 relative">
        {/* Y-axis values */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-400">
          {[600, 450, 300, 150, 0].map((value, index) => (
            <div key={index} className="w-8 h-3 bg-gray-200 rounded"></div>
          ))}
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="w-full h-[1px] bg-gray-100"
              style={{
                opacity: index === 4 ? 0 : 1,
              }}
            ></div>
          ))}
        </div>

        {/* Chart content */}
        <div className="flex-1 flex items-end justify-between gap-4 pl-10">
          {/* Bars for each day */}
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                {/* Bar pairs */}
                <div className="w-full flex justify-center gap-1 mb-2">
                  <div
                    className="w-[14px] bg-[#2A2A2A]/10 rounded-[10px] animate-pulse"
                    style={{
                      height: `${Math.random() * 120 + 60}px`,
                    }}
                  ></div>
                  <div
                    className="w-[14px] bg-[#4D7CFE]/10 rounded-[10px] animate-pulse"
                    style={{
                      height: `${Math.random() * 80 + 40}px`,
                    }}
                  ></div>
                </div>
                {/* Day label */}
                <div className="text-sm text-gray-400">
                  <div className="w-8 h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivitySkeleton;
