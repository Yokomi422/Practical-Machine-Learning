import Tree from "react-d3-tree";
import { RawNodeDatum } from "react-d3-tree";
import * as React from "react";
import styles from "./Tree01.module.css";

const IndexTemplate: React.FC = () => {
  const nodes: RawNodeDatum = {
    name: "天気は晴れか?",
    children: [
      {
        name: "No 不参加",
      },
      {
        name: "Yes 次の質問へ 風は強いか?",
        children: [
          {
            name: "Yes 不参加",
          },
          {
            name: "No 次の質問へ 暖かいか?",
            children: [
              {
                name: "Yes 参加",
              },
              {
                name: "No 不参加",
              },
            ],
          },
        ],
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

export default IndexTemplate;
