import React from "react";
import {
    ComposedChart,
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

const x: number[] = [
    171, 180, 175, 171, 163, 168, 176, 173, 174, 164, 171, 172, 172, 175, 163,
    163, 162, 167, 170, 173, 170, 170, 175, 170,
];

const y: number[] = [
    62, 71, 53, 78, 54, 62, 60, 62, 60, 50, 66, 69, 63, 62, 65, 53, 52, 60, 67,
    70, 67, 56, 68, 56,
];

//最小二乗法を実装する
const leastSquares = (x: number[], y: number[]) => {
    const len: number = x.length;
    const sumX: number = x.reduce((a, b) => a + b, 0);
    const sumY: number = y.reduce((a, b) => a + b, 0);
    const sumXX: number = x.reduce((a, b) => a + b * b, 0);
    const sumXY: number = x.reduce((a, b, i) => a + b * y[i], 0);
    const a: number = (sumY * sumXX - sumX * sumXY) / (len * sumXX - sumX * sumX);
    const b: number = (len * sumXY - sumX * sumY) / (len * sumXX - sumX * sumX);
    return { a, b };
};

const { a, b } = leastSquares(x, y);

const lineData = [
    { x: 150, y: b * 150 + a },
    { x: 180, y: b * 180 + a },
];

export default function LinearRegression() {
    return (
        <ComposedChart
            width={400}
            height={300}
            data={data}
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
                domain={[0, 80]}
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="A school" data={data} fill="#8884d8" />
            <Line
                type="linear"
                dataKey="y"
                data={lineData}
                stroke="#ff7300"
                dot={false}
                activeDot={false}
            />
        </ComposedChart>
    );
}
