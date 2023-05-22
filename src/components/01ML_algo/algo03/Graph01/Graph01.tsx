import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Star = (props) => {
  const { cx, cy, payload } = props;
  return (
    <path d="M10,1 13,8 21,8 15,12 18,19 10,14 2,19 5,12 -1,8 7,8z" transform={`translate(${cx - 10}, ${cy - 10}) scale(0.8)`} fill="#8884d8" />
  );
}

const Dot = (props) => {
  const { cx, cy } = props;
  return (
    <circle cx={cx} cy={cy} r={3} fill="#8884d8" />
  );
}

// データの生成 (ランダムな10個のデータポイント)
const data = [
    { x: 0.2, y: 0.25 , shape: 'star'},
    { x: 0.3, y: 0.3 , shape: 'star'},
    { x: 0.35, y: 0.38 , shape: 'star'},
    { x: 0.1, y: 0.45, shape: "dot" },
    { x: 0.38, y: 0.3, shape: "dot" },
    { x: 0.8, y: 0.1, shape: "star" },
    { x: 0.8, y: 0.35, shape: "dot" },
    { x: 0.28, y: 0.9, shape: "star" },
    { x: 0.32, y: 0.67, shape: "dot" },
    { x: 0.8, y: 0.72, shape: "dot"},
]
  
const StarDotChart = () => (
<ScatterChart
    width={500}
    height={300}
    margin={{top: 20, right: 20, bottom: 20, left: 20}}
>
    <CartesianGrid />
    <XAxis type="number" domain={[0, 1]} dataKey="x" name='x' />
    <YAxis type="number" domain={[0, 1]} dataKey="y" name='y' />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Legend />
    <Scatter name="Stars" data={data.filter(d => d.shape === 'star')} fill="#8884d8" shape={<Star />} />
    <Scatter name="Dots" data={data.filter(d => d.shape === 'dot')} fill="#8884d8" shape={<Dot />} />
</ScatterChart>
);
  
  export default StarDotChart;
  