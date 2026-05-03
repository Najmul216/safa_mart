"use client";

import React, { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  Title,
);

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const chartSets = {
  sales: {
    title: "Sales",
    highlight: "#10B981",
    shadow: "rgba(16, 185, 129, 0.26)",
    fill: "rgba(16, 185, 129, 0.18)",
    data: [510, 520, 500, 525, 530, 538, 545],
  },
  orders: {
    title: "Orders",
    highlight: "#f97316",
    shadow: "rgba(249, 115, 22, 0.26)",
    fill: "rgba(249, 115, 22, 0.18)",
    data: [1.0, 1.02, 0.99, 1.03, 1.05, 1.06, 1.04],
  },
};

const sharedOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 850,
    easing: "easeOutCubic",
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#020617",
      titleColor: "#fff",
      bodyColor: "#cbd5e1",
      cornerRadius: 14,
      padding: 14,
      displayColors: false,
      callbacks: {
        label: (context) => {
          return `${context.dataset.label}: ${context.formattedValue}`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#94a3b8",
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        color: "rgba(148, 163, 184, 0.12)",
        borderDash: [4, 4],
      },
      ticks: {
        color: "#94a3b8",
        beginAtZero: false,
        font: {
          size: 12,
        },
      },
    },
  },
};

export default function WeeklySalesCharts() {
  const [activeSection, setActiveSection] = useState("sales");

  const currentData = chartSets[activeSection];

  const lineData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: currentData.title,
          data: currentData.data,
          fill: true,
          tension: 0.4,
          backgroundColor: currentData.fill,
          borderColor: currentData.highlight,
          pointBorderColor: currentData.highlight,
          pointBackgroundColor: "#0f172a",
          pointRadius: 5,
          pointHoverRadius: 8,
          borderWidth: 3,
          pointBorderWidth: 2,
          hoverBorderWidth: 4,
          segment: {
            borderColor: currentData.highlight,
          },
        },
      ],
    }),
    [currentData],
  );

  const lineOptions = useMemo(
    () => ({
      ...sharedOptions,
      plugins: {
        ...sharedOptions.plugins,
        title: {
          display: true,
          text: `${currentData.title} Overview`,
          color: "#cbd5e1",
          font: {
            size: 14,
            weight: "600",
          },
          padding: {
            bottom: 14,
          },
        },
      },
    }),
    [currentData],
  );

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.9)] backdrop-blur-xl md:p-6 lg:p-8">
      <div className="relative rounded-[1.75rem] bg-gradient-to-br from-slate-900/85 via-slate-950/80 to-slate-950/95 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] md:p-8">
        <div className="absolute -right-20 top-8 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative z-10 space-y-8">
          {/* Header Section */}
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Weekly Sales
              </h3>
            </div>

            <div className="inline-flex rounded-full border border-white/10 bg-slate-900/70 p-1">
              {Object.entries(chartSets).map(([key, config]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSection(key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 md:px-5 ${
                    activeSection === key
                      ? "bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {config.title}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          {/* Row 1: Full-width chart (Orders Tracking) */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 md:p-6">
            <div className="absolute -bottom-28 -right-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute top-10 left-6 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="relative z-10">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white md:text-xl">
                    {currentData.title} Trends
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 md:text-sm">
                    7-day performance overview
                  </p>
                </div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold md:text-sm"
                  style={{
                    backgroundColor: currentData.highlight + "18",
                    color: currentData.highlight,
                  }}
                >
                  <span>+12.5%</span>
                </div>
              </div>

              <div className="h-72 w-full md:h-96">
                <Line data={lineData} options={lineOptions} />
              </div>
            </div>
          </div>

          {/* Row 2: 3-column stats grid */}
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Col 1: Total Orders */}
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.6)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {currentData.title === "Sales"
                  ? "Total Sales"
                  : "Total Orders"}
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">
                {activeSection === "sales" ? "$12,450" : "1,230"}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                {activeSection === "sales"
                  ? "Total revenue generated this week"
                  : "Total orders completed this week"}
              </p>
              <div className="mt-5 flex items-center justify-between rounded-3xl bg-slate-950/70 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Trend
                  </p>
                  <p className="mt-1 text-lg font-semibold text-emerald-400">
                    +18.2%
                  </p>
                </div>
                <div
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: currentData.highlight + "20",
                    color: currentData.highlight,
                  }}
                >
                  ↑ Growth
                </div>
              </div>
            </div>

            {/* Col 2: Average + Peak Day stacked */}
            <div className="flex flex-col gap-4">
              <div className="flex-1 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-4">
                <p className="text-xs text-slate-400">Average</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {activeSection === "sales" ? "$521" : "1.02"}
                </p>
                <p className="mt-1 text-xs text-slate-500">per day</p>
              </div>
              <div className="flex-1 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-4">
                <p className="text-xs text-slate-400">Peak Day</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {activeSection === "sales" ? "Fri" : "Sun"}
                </p>
                <p className="mt-1 text-xs text-slate-500">highest</p>
              </div>
            </div>

            {/* Col 3: Daily Breakdown */}
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Daily Breakdown
              </p>
              <div className="space-y-3">
                {labels.slice(0, 7).map((label, index) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-xs text-slate-400 sm:text-sm">
                      {label}
                    </span>
                    <div className="flex-1">
                      <div className="h-2 rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: currentData.highlight,
                            width: `${(currentData.data[index] / Math.max(...currentData.data)) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                    <span className="w-10 text-right text-xs font-medium text-white sm:text-sm">
                      {currentData.data[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
