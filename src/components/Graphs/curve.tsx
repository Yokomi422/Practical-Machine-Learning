import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
} from "recharts";

// 三次関数 y = x^3 - 5x^2 + 2x + 1 のデータを生成
const data = Array.from({ length: 201 }, (_, i) => {
  const x = -10 + i * 0.1; // x を -10 から 10 まで 0.1 刻みで動かす
  const y = x * x * x - 5 * x * x + 2 * x + 1;
  return { x: x, y: y }; // 元の点
});

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const data1 = data.map((point) => ({
  x: point.x,
  y: point.y - getRandomArbitrary(-1, 1),
})); // 点の周囲にランダムに2つの点を追加
const data2 = data.map((point) => ({
  x: point.x,
  y: point.y + getRandomArbitrary(-1, 1),
}));

export default function MyChart() {
  return (
    <LineChart
      width={500}
      height={300}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="x" />
      <YAxis type="number" dataKey="y" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Line
        type="monotone"
        dataKey="y"
        data={data}
        stroke="#8884d8"
        dot={false}
        activeDot={false}
      />
      <Scatter name="A school" data={data1} fill="red" /> //
      追加したランダムな点
      <Scatter name="A school" data={data2} fill="blue" /> //
      追加したランダムな点
    </LineChart>
  );
}
