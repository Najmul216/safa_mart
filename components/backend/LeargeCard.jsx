import React from "react";

export default function LeargeCard({
  title,
  label,
  value,
  detail,
  icon: Icon,
  gradient,
  glow,
  badge,
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-4xl border border-white/15 bg-slate-800 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.25)] ${gradient}`}
    >
      <div
        className={`absolute -right-10 top-4 h-32 w-32 rounded-full blur-2xl opacity-80 ${glow}`}
      />
      <div
        className={`absolute -left-8 bottom-6 h-24 w-24 rounded-full blur-2xl opacity-70 ${glow}`}
      />

      <div className="relative overflow-hidden px-6 pb-6 pt-8 sm:px-7">
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white/20 to-transparent" />
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/15 bg-white/15 text-white shadow-lg shadow-slate-950/25 backdrop-blur-sm">
            <Icon className="h-7 w-7" />
          </div>

          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] ${badge}`}
          >
            {label}
          </span>
        </div>

        <div className="mt-4 text-sm uppercase tracking-[0.24em] text-white/80">
          {title}
        </div>

        <div className="mt-6">
          <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {value}
          </p>
          <p className="mt-3 text-sm leading-6 text-white/75">{detail}</p>
        </div>
      </div>
    </article>
  );
}
