"use client";

import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Watch", value: 29, fill: "#10B981" },
  { name: "Head Shoulders Shampoo", value: 50, fill: "#3B82F6" },
  { name: "Pantene hair-care", value: 23, fill: "#FB923C" },
  { name: "Lettuce", value: 22, fill: "#38BDF8" },
];

const COLORS = ["#10B981", "#3B82F6", "#FB923C", "#38BDF8"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/20 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
        <p className="text-sm font-semibold text-white">{payload[0].name}</p>
        <p className="text-sm text-emerald-400">
          {payload[0].value} ({((payload[0].value / 124) * 100).toFixed(1)}%)
        </p>
      </div>
    );
  }
  return null;
};

const CustomLabel = (entry) => {
  return `${((entry.value / 124) * 100).toFixed(0)}%`;
};

export default function BestSellingProductsChats() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const topProduct = data.reduce((prev, curr) =>
    curr.value > prev.value ? curr : prev,
  );

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.9)] backdrop-blur-xl md:p-6 lg:p-8">
      <div className="relative flex-1 rounded-[1.75rem] bg-gradient-to-br from-slate-900/85 via-slate-950/80 to-slate-950/95 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] md:p-8">
        {/* Decorative blurs — mirror of WeeklySalesCharts */}
        <div className="absolute -right-20 top-8 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative z-10 space-y-8">
          {/* Header — identical pattern to WeeklySalesCharts */}
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Best Selling Products
              </h3>
            </div>

            <div className="inline-flex rounded-full border border-white/10 bg-slate-900/70 px-4 py-2">
              <span className="text-sm font-semibold text-slate-300">
                Live Overview
              </span>
            </div>
          </div>

          {/* Row 1: Pie chart — full width */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 md:p-6 mt-10">
            <div className="absolute -bottom-28 -right-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute top-10 left-6 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white md:text-xl">
                    Sales Distribution
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 md:text-sm">
                    Top products by units sold
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 md:text-sm">
                  <span>{total} total units</span>
                </div>
              </div>

              <div className="relative mx-auto h-72 w-full md:h-96">
                <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <div className="absolute inset-x-10 top-10 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -left-10 bottom-8 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl" />
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip content={<CustomTooltip />} />
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={CustomLabel}
                      outerRadius={130}
                      innerRadius={68}
                      fill="#8884d8"
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={900}
                      animationEasing="ease-out"
                      onMouseEnter={(_, index) => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      cornerRadius={18}
                      paddingAngle={4}
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.fill}
                          style={{
                            filter:
                              activeIndex === null || activeIndex === index
                                ? "drop-shadow(0 0 18px rgba(0, 0, 0, 0.28))"
                                : "drop-shadow(0 0 4px rgba(0, 0, 0, 0.1)) opacity(0.6)",
                            transition: "all 0.3s ease",
                          }}
                          opacity={
                            activeIndex === null || activeIndex === index
                              ? 1
                              : 0.55
                          }
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 2: Modern Performance Details Card */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/40 p-4 shadow-xl backdrop-blur-xl md:p-5 min-h-[300px] flex flex-col justify-between">
            {/* Subtle glow effects */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/5 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-emerald-600/5 blur-3xl" />

            <div className="relative z-10">
              {/* Header Section */}
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">Performance Breakdown</h4>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-lg font-black text-white">{total}</div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-slate-500 font-bold">Units</div>
                </div>
              </div>

              {/* Product List — Spacing matched to WeeklySales breakdown (space-y-3) */}
              <div className="grid gap-3">
                {data.map((item, index) => {
                  const percentage = ((item.value / total) * 100).toFixed(1);
                  return ( 
                    <div
                      key={item.name}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      className={`group relative flex flex-col gap-2 transition-all duration-500 ${
                        activeIndex === null || activeIndex === index 
                          ? "opacity-100 translate-x-0" 
                          : "opacity-20 scale-[0.98]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-3 w-3 rounded-full border border-slate-900 shadow-lg"
                            style={{
                              backgroundColor: item.fill,
                              boxShadow: `0 0 15px ${item.fill}30`,
                            }}
                          />
                          <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{item.value}</span>
                          <span className="rounded bg-slate-800/50 px-1.5 py-0.5 text-[9px] font-bold text-slate-500 border border-white/5">
                            {percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Premium Progress Bar */}
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800/40 border border-white/5">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${percentage}%`,
                            background: `linear-gradient(90deg, ${item.fill}aa, ${item.fill})`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
