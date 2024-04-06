import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    averageStudentInterest: 2400,
  },
  {
    name: "Feb",
    averageStudentInterest: 1398,
  },
  {
    name: "Mar",
    averageStudentInterest: 9800,
  },
  {
    name: "Apr",
    averageStudentInterest: 3908,
  },
  {
    name: "May",
    averageStudentInterest: 4800,
  },
  {
    name: "Jun",
    averageStudentInterest: 3800,
  },
  {
    name: "July",
    averageStudentInterest: 4300,
  },
  {
    name: "Aug",
    averageStudentInterest: 9800,
  },
  {
    name: "Sep",
    averageStudentInterest: 3908,
  },
  {
    name: "Oct",
    averageStudentInterest: 4800,
  },
  {
    name: "Nov",
    averageStudentInterest: 3800,
  },
  {
    name: "Dec",
    averageStudentInterest: 4300,
  },
];

export default function TransactionChart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Performance Score</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="averageStudentInterest" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
