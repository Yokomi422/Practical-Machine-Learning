import Tree from "react-d3-tree"
import { RawNodeDatum } from 'react-d3-tree';
import * as React from 'react';
 
const IndexTemplate: React.FC = () => {
  const nodes: RawNodeDatum = {
    name: '由仁太郎',
    children: [
      {
        name: '由仁 次郎'
      },
      {
        name: '由仁三郎',
        children: [
          {
            name: '由仁四郎'
          },
          {
            name: '由仁五郎'
          }
        ]
      }
    ]
  }
  return (
    <>
      <div style={{ width: '300', height: '300' }}>
        <Tree data={nodes} />
      </div>
    </>
  )
}
 
export default IndexTemplate