"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 600 },
  { month: "Apr", sales: 800 },
  { month: "May", sales: 500 },
];

export default function SalesChart() {
  return (
    <div className="w-full min-w-2xl h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="linear"
            dataKey="sales"
            stroke="#2563eb"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
