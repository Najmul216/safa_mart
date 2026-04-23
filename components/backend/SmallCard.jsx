import React from "react";

export default function SmallCard({
  title,
  value,
  label,
  info,
  icon: Icon,
  accent,
  badge,
}) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 hover:border-slate-200/10 hover:bg-slate-900/80 sm:p-6">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${accent}`}
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
            {title}
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {value}
          </h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-white shadow-lg shadow-slate-950/30">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
          {label}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badge.color}`}
        >
          {badge.text}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-400">{info}</p>
    </article>
  );
}
