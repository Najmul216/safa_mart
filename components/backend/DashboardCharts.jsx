import React from "react";
import WeeklySalesCharts from "./WeeklySalesCharts";
import BestSellingProductsChats from "./BestSellingProductsChats";

export default function DashboardCharts() {
  return (
    <div className="relative mb-6 overflow-hidden rounded-4xl bg-slate-950/60 p-4">
      <div className="pointer-events-none absolute -left-16 top-6 h-72 w-72 rounded-full bg-sky-500/10 blur-2xl" />
      <div className="pointer-events-none absolute right-0 bottom-4 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-2xl" />
      <div className="relative grid grid-cols-1 items-stretch gap-4 px-2 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 xl:px-0">
        <WeeklySalesCharts />
        <BestSellingProductsChats />
      </div>
    </div>
  );
}
