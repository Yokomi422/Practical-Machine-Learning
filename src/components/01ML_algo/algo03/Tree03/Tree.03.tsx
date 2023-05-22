import Tree from "react-d3-tree";
import { RawNodeDatum } from "react-d3-tree";
import * as React from "react";
import styles from "./Tree03.module.css";

const Tree03: React.FC = () => {
  const nodes: RawNodeDatum = {
    name: "y > 0.4",
    children: [
      {
        name: "★",
      },
      {
        name: "⚫︎",
      },
    ],
  };

  return (
    <div className={`${styles.border} ${styles.container}`}>
      <Tree
        data={nodes}
        translate={{ x: 150, y: 16 }}
        orientation="vertical"
        scaleExtent={{ min: 0.1, max: 0.8 }}
        userSelect="none"
      />
    </div>
  );
};

export default Tree03;
