import {
  CalendarDays,
  Clock3,
  CreditCard,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import LeargeCard from "./LeargeCard";

const cards = [
  {
    id: 1,
    title: "Today Orders",
    value: "$ 0.00",
    label: "Realtime",
    detail: "Cash $0.00 · Card $0.00 · Credit $0.00",
    icon: ShoppingBag,
    gradient: "from-sky-400 via-cyan-400 to-slate-850",
    glow: "bg-cyan-400/30",
    badge: "border-cyan-300/40 bg-white/10 text-cyan-100",
  },
  {
    id: 2,
    title: "Yesterday Orders",
    value: "$ 0.00",
    label: "Daily",
    detail: "Cash $0.00 · Card $0.00 · Credit $0.00",
    icon: CreditCard,
    gradient: "from-emerald-400 via-teal-400 to-slate-850",
    glow: "bg-emerald-400/25",
    badge: "border-emerald-300/40 bg-white/10 text-emerald-100",
  },
  {
    id: 3,
    title: "This Month",
    value: "$ 22,517.24",
    label: "Monthly",
    detail: "Revenue insights with healthy growth.",
    icon: CalendarDays,
    gradient: "from-violet-500 via-fuchsia-500 to-slate-950",
    glow: "bg-fuchsia-400/25",
    badge: "border-fuchsia-300/40 bg-white/10 text-fuchsia-100",
  },
  {
    id: 4,
    title: "Last Month",
    value: "$ 5,684.46",
    label: "Historical",
    detail: "Strong closing results and conversion.",
    icon: Clock3,
    gradient: "from-amber-400 via-orange-500 to-slate-950",
    glow: "bg-amber-400/30",
    badge: "border-amber-300/40 bg-white/10 text-amber-100",
  },
  {
    id: 5,
    title: "All-Time Sales",
    value: "$ 1,274,803.38",
    label: "Lifetime",
    detail: "Lifetime revenue across all channels.",
    icon: TrendingUp,
    gradient: "from-indigo-500 via-blue-500 to-slate-950",
    glow: "bg-indigo-400/45",
    badge: "border-indigo-300/40 bg-white/10 text-indigo-100",
  },
];

export default function LeargeCards() {
  return (
    <div className="relative mb-6 overflow-hidden rounded-4xl bg-slate-950/60 p-4">
      <div className="pointer-events-none absolute -left-16 top-6 h-72 w-72 rounded-full bg-sky-500/10 blur-2xl" />
      <div className="pointer-events-none absolute right-0 bottom-4 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-2xl" />
      <div className="relative grid grid-cols-1 gap-4 px-2 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-5 xl:px-0">
        {cards.map((card) => (
          <LeargeCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
