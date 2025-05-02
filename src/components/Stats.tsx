
import React from 'react';

interface Stat {
  label: string;
  value: string;
}

interface StatsProps {
  stats: Stat[];
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white backdrop-blur-sm bg-opacity-80 rounded-xl shadow-sm border border-slate-100 p-4 text-center hover:shadow-md transition-all duration-300 transform hover:scale-105"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-xl md:text-2xl font-bold text-slate-800">{stat.value}</div>
          <div className="text-xs text-slate-500 font-medium mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
