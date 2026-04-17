import React from "react";
import Sidebar from "../../components/backend/Sidebar";
import Navbar from "../../components/backend/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* Header */}
        <Navbar />
        {/* Main */}
        <main className="ml-60 p-8 bg-slate-900 text-white min-h-screen mt-16">
          {children}
        </main>
      </div>

      {/* Main Content */}
    </div>
  );
}
