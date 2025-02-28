import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ActivityData } from '../types';

interface WeeklyActivityProps {
  data: ActivityData[];
}

const WeeklyActivity: React.FC<WeeklyActivityProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-[25px] p-5 shadow-sm h-full">
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            barGap={8}
            barSize={14}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend 
              align="right" 
              verticalAlign="top" 
              iconType="circle"
              wrapperStyle={{ paddingBottom: 20 }}
            />
            <Bar name="Withdraw" dataKey="withdraw" fill="#2A2A2A" radius={[10, 10, 10, 10]} />
            <Bar name="Deposit" dataKey="deposit" fill="#4D7CFE" radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyActivity;