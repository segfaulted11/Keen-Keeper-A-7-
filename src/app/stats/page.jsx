"use client";
import { useTimeline } from "../context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const { activities } = useTimeline();
  const chartData = [
    {
      name: "Call",
      value: activities.filter((activity) => activity.action === "call").length,
    },
    {
      name: "Text",
      value: activities.filter((activity) => activity.action === "text").length,
    },
    {
      name: "Video",
      value: activities.filter((activity) => activity.action === "video")
        .length,
    },
  ];
  const COLORS = ["#1f4d3b", "#7c3aed", "#34a853"];
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-5xl font-bold mb-8">Friendship Analytics</h1>

      <div className="bg-base-100 rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">By Interaction Type</h2>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={80}
                outerRadius={120}
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
