import React from "react";
import {
  ComposedChart,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  Line,
} from "recharts";

const data = [
  { x: 171, y: 62 },
  { x: 180, y: 71 },
  { x: 175, y: 53 },
  { x: 171, y: 78 },
  { x: 163, y: 54 },
  { x: 168, y: 62 },
  { x: 176, y: 60 },
  { x: 173, y: 62 },
  { x: 174, y: 60 },
  { x: 164, y: 50 },
  { x: 171, y: 66 },
  { x: 172, y: 69 },
  { x: 172, y: 63 },
  { x: 175, y: 62 },
  { x: 163, y: 65 },
  { x: 163, y: 53 },
  { x: 162, y: 52 },
  { x: 167, y: 60 },
  { x: 170, y: 67 },
  { x: 173, y: 70 },
  { x: 170, y: 67 },
  { x: 170, y: 56 },
  { x: 175, y: 68 },
  { x: 170, y: 56 },
];

export default function MyChart() {
  return (
    <ScatterChart
      width={400}
      height={300}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <CartesianGrid />
      <XAxis
        type="number"
        dataKey="x"
        name="stature"
        unit="cm"
        domain={[150, 180]}
      />
      <YAxis
        type="number"
        dataKey="y"
        name="weight"
        unit="kg"
        domain={[40, 80]}
      />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter name="A school" data={data} fill="#8884d8" />
    </ScatterChart>
  );
}
