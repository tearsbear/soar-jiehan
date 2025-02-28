import React from "react";

const SettingsSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-[#F4F5F7]">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex-1 md:flex-initial px-4 md:px-6 py-4"
            >
              <div className="h-4 bg-gray-200 rounded w-20 mx-auto md:mx-0 animate-pulse"></div>
            </div>
          ))}
      </div>

      {/* Profile Content */}
      <div className="p-6 md:p-10">
        <div className="flex flex-col md:flex-row">
          {/* Profile Picture */}
          <div className="md:w-1/5 mb-8 md:mb-0 md:pr-10 flex justify-center md:block">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="w-full md:w-4/5">
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
              {/* Input field skeletons */}
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                    <div className="h-12 bg-gray-100 rounded-lg w-full animate-pulse"></div>
                  </div>
                ))}

              {/* Save Button */}
              <div className="col-span-2 mt-8 ml-auto">
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSkeleton;
