"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Printer, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import data from "../../data.json"; // Assuming you have a data file with the orders

const CustomDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "delivered":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "pending":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      default:
        return "bg-red-500/10 text-red-400 border-red-500/20";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-10 px-4 sm:px-0 mb-12"
    >
      <h2 className="text-2xl font-bold text-slate-100 mb-8 ml-1 tracking-tight">
        Recent Orders
      </h2>

      <div className="bg-[#111827] border border-slate-800/60 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="bg-slate-900/50 border-b border-slate-800/80">
                <th className="px-6 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  Invoice No
                </th>
                <th className="px-6 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  Order Time
                </th>
                <th className="px-6 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  Customer Name
                </th>
                <th className="px-6 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  Method
                </th>
                <th className="px-6 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  Amount
                </th>
                <th className="px-6 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  Status
                </th>
                <th className="px-6 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  Action
                </th>
                <th className="px-6 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] text-right">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              <AnimatePresence mode="wait">
                {currentData.map((order) => (
                  <motion.tr
                    key={order.id}
                    variants={rowVariants}
                    whileHover={{ backgroundColor: "rgba(30, 41, 59, 0.4)" }}
                    className="transition-colors duration-200 group cursor-default"
                  >
                    <td className="px-6 py-5 text-sm font-semibold text-slate-300">
                      {order.id}
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-400 font-medium">
                      {order.time}
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-200 font-medium">
                      {order.customer}
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-400 font-medium">
                      {order.method}
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-100 font-bold">
                      {order.amount}
                    </td>
                    <td className="px-6 py-5 text-sm">
                      <span
                        className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${getStatusStyles(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="relative group/select max-w-[130px]">
                        <select
                          defaultValue={order.status}
                          className="bg-[#1f2937]/50 border border-slate-700/50 text-slate-300 text-xs rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 block w-full pl-3 pr-8 py-2.5 outline-none cursor-pointer appearance-none hover:bg-[#374151]/50 hover:border-slate-600/50 transition-all shadow-inner"
                        >
                          <option value="Processing">Processing</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Pending">Pending</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2.5 pointer-events-none text-slate-500 group-hover/select:text-slate-300 transition-colors">
                          <svg
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end space-x-3 text-slate-500">
                        <button
                          title="Print"
                          className="hover:text-blue-400 transition-all duration-300 p-2 hover:bg-slate-800/80 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 active:scale-95"
                        >
                          <Printer size={18} />
                        </button>
                        <button
                          title="View Details"
                          className="hover:text-blue-400 transition-all duration-300 p-2 hover:bg-slate-800/80 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 active:scale-95"
                        >
                          <ZoomIn size={18} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Pagination - Matching the image style precisely */}
        <div className="px-6 py-10 bg-[#0f172a]/30 flex items-center justify-center border-t border-slate-800/50">
          <nav className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center text-slate-500 hover:text-slate-200 transition-all pr-4 group disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft
                size={16}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              Previous
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Logic to show a limited number of page buttons if totalPages is large
                // For 10 pages, we can show them all or use the original style with ellipses
                // Let's stick to a simple dynamic list for now as 10 is manageable
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl transition-all duration-300 flex items-center justify-center ${
                        currentPage === page
                          ? "bg-[#1e293b] text-blue-400 border border-slate-700/50 shadow-[0_0_20px_rgba(59,130,246,0.1)] scale-110 z-10"
                          : "text-slate-500 hover:bg-slate-800/50 hover:text-slate-300 border border-transparent"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === currentPage - 2 ||
                  page === currentPage + 2
                ) {
                  return (
                    <span key={page} className="px-1 text-slate-700 font-black">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center text-slate-500 hover:text-slate-200 transition-all pl-4 group disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 20px;
          border: 2px solid #111827;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}</style>
    </motion.div>
  );
};

export default CustomDataTable;
