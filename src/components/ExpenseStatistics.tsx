import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ExpenseCategory } from "../types";

interface ExpenseStatisticsProps {
  data: ExpenseCategory[];
}

const ExpenseStatistics: React.FC<ExpenseStatisticsProps> = ({ data }) => {
  // Use the data passed from props instead of hardcoding values
  // This ensures we're using the values from mockData.ts
  const orderedData = [
    {
      name: "Others",
      value: data.find((item) => item.name === "Others")?.value || 25,
      color: "#2A2A2A",
    }, // Top left (black)
    {
      name: "Investment",
      value: data.find((item) => item.name === "Investment")?.value || 20,
      color: "#4D7CFE",
    }, // Top right (blue)
    {
      name: "Entertainment",
      value: data.find((item) => item.name === "Entertainment")?.value || 40,
      color: "#3B4B80",
    }, // Bottom right (navy)
    {
      name: "Bill Expense",
      value: data.find((item) => item.name === "Bill Expense")?.value || 15,
      color: "#FF8A48",
    }, // Bottom left (orange)
  ];

  // Custom label positioning for each segment
  const getLabelPosition = (
    index: number,
    midAngle: number,
    outerRadius: number
  ) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 0.6; // Default radius

    // Adjust radius and angle for each segment
    switch (index) {
      case 0: // Others (black)
        return {
          x: radius * Math.cos(-midAngle * RADIAN) * 0.9,
          y: radius * Math.sin(-midAngle * RADIAN) * 0.9,
        };
      case 1: // Investment (blue)
        return {
          x: radius * Math.cos(-midAngle * RADIAN) * 1.1,
          y: radius * Math.sin(-midAngle * RADIAN) * 1.1,
        };
      case 2: // Entertainment (navy)
        return {
          x: radius * Math.cos(-midAngle * RADIAN) * 1.0,
          y: radius * Math.sin(-midAngle * RADIAN) * 1.0,
        };
      case 3: // Bill Expense (orange)
        return {
          x: radius * Math.cos(-midAngle * RADIAN) * 1.0,
          y: radius * Math.sin(-midAngle * RADIAN) * 1.0,
        };
      default:
        return {
          x: radius * Math.cos(-midAngle * RADIAN),
          y: radius * Math.sin(-midAngle * RADIAN),
        };
    }
  };

  return (
    <div className="bg-white rounded-[25px] p-5 shadow-sm h-full flex items-center justify-center">
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={orderedData}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={110}
              paddingAngle={5}
              dataKey="value"
              labelLine={false}
              startAngle={45}
              endAngle={-315}
              label={({
                cx,
                cy,
                midAngle,
                outerRadius,
                percent,
                index,
                name,
              }) => {
                const position = getLabelPosition(index, midAngle, outerRadius);
                const x = cx + position.x;
                const y = cy + position.y;

                // Increased spacing between percentage and name
                const percentYOffset = -10;
                const nameYOffset = 10;

                return (
                  <g>
                    <text
                      x={x}
                      y={y + percentYOffset}
                      fill="#FFFFFF"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontWeight="bold"
                      fontSize="18"
                    >
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                    <text
                      x={x}
                      y={y + nameYOffset}
                      fill="#FFFFFF"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="12"
                    >
                      {name}
                    </text>
                  </g>
                );
              }}
            >
              {orderedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="#FFFFFF"
                  strokeWidth={3}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
