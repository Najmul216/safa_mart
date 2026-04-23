import React from "react";
import {
  PackageOpen,
  Clock3,
  Loader2,
  CheckCircle2,
  Blocks,
} from "lucide-react";
import SmallCard from "./SmallCard";

const cards = [
  {
    id: 1,
    title: "Total Orders",
    value: "1,378",
    label: "All time",
    info: "Active store performance",
    icon: PackageOpen,
    accent: "from-sky-500 to-cyan-400",
    badge: {
      text: "$1,378,000",
      color: "bg-slate-900/80 text-slate-100",
    },
  },
  {
    id: 2,
    title: "Orders Pending",
    value: "103",
    label: "Under review",
    info: "$51,458.21 pending",
    icon: Clock3,
    accent: "from-rose-500 to-fuchsia-500",
    badge: {
      text: "$51,458.21",
      color: "bg-rose-500/15 text-rose-200 border border-rose-500/30",
    },
  },
  {
    id: 3,
    title: "Orders Processing",
    value: "38",
    label: "In progress",
    info: "Speeding up fulfillment",
    icon: Loader2,
    accent: "from-amber-400 to-orange-500",
    badge: {
      text: "+8% QoQ",
      color: "bg-amber-500/15 text-amber-200 border border-amber-500/30",
    },
  },
  {
    id: 4,
    title: "Orders Delivered",
    value: "123",
    label: "Completed",
    info: "Latest shipment successes",
    icon: CheckCircle2,
    accent: "from-emerald-400 to-teal-500",
    badge: {
      text: "Stable",
      color: "bg-emerald-500/15 text-emerald-200 border border-emerald-500/30",
    },
  },
  {
    id: 5,
    title: "Stock Products",
    value: "83",
    label: "In Stock",
    info: "Latest shipment successes",
    icon: Blocks,
    accent: "from-blue-400 to-teal-500",
    badge: {
      text: "Stable",
      color: "bg-blue-500/15 text-blue-200 border border-blue-500/30",
    },
  },
];

export default function SmallCards() {
  return (
    <div className="relative mb-6 overflow-hidden rounded-4xl bg-slate-950/60 p-4">
      <div className="pointer-events-none absolute -left-16 top-6 h-72 w-72 rounded-full bg-sky-500/10 blur-2xl" />
      <div className="pointer-events-none absolute right-0 bottom-4 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-2xl" />
      <div className="relative grid grid-cols-1 gap-4 px-2 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-5 xl:px-0">
        {cards.map((card) => (
          <SmallCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
