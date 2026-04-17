import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-slate-50 space-y-6 w-60 h-screen p-3 fixed left-0 top-0">
      <Link className="mb-6" href="#">
        Logo
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Out Staffs</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
