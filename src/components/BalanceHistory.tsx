import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { BalanceHistoryData } from '../types';

interface BalanceHistoryProps {
  data: BalanceHistoryData[];
}

const BalanceHistory: React.FC<BalanceHistoryProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-[25px] p-5 shadow-sm h-full">
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4D7CFE" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#4D7CFE" stopOpacity={0.01}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
              }}
              formatter={(value) => [`$${value}`, 'Balance']}
              labelFormatter={(label) => `${label}`}
            />
            <Area 
              type="monotone" 
              dataKey="balance" 
              stroke="#4D7CFE" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBalance)" 
              activeDot={{ r: 6, fill: '#4D7CFE', stroke: 'white', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceHistory;