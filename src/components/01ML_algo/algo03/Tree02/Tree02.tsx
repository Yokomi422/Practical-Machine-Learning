import Tree from "react-d3-tree";
import { RawNodeDatum } from 'react-d3-tree';
import * as React from 'react';
import styles from "./Tree02.module.css";

const IndexTemplate: React.FC = () => {
  const nodes: RawNodeDatum = {
    name: '年齢は30歳以上か?',
    children: [
      {
        name: 'Yes 12ヶ月'
      },
      {
        name: 'No 次の質問へ メンバーシップ継続は1年以上?',
        children: [
          {
            name: 'Yes 24ヶ月'
          },
          {
            name: 'No 次の質問へ 一年の支払額は5000円以上?',
            children: [
              {
                "name": "Yes 12ヶ月",
              },
              {
                "name": "No 6ヶ月",
              }
            ]
          }
        ],
      },
    ]
  }

  const containerStyles = {
    width: '45vw',
    height: '45vh'
  }

  return (

    <div className={`${styles.border} ${styles.container}`}>
      <Tree
        data={nodes}
        translate={{ x: 150, y: 16 }}
        orientation="vertical"
        scaleExtent={{ min: 0.1, max: 0.7 }}
        userSelec ='none'
      />
    </div>
  )
}

export default IndexTemplate
