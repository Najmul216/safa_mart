import React from "react";
import Heading from "../../../components/backend/Heading";
import LeargeCards from "../../../components/backend/LeargeCards";
import SmallCards from "../../../components/backend/SmallCards";
import DashboardCharts from "../../../components/backend/DashboardCharts";

export default function dashboard() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <LeargeCards />
      {/* Small Cards */}
      <SmallCards />
      {/* Charts */}
      <DashboardCharts />
      {/* Recent Orders Tables */}
    </div>
  );
}
