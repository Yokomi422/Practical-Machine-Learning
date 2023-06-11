import React, { type ReactNode } from "react";
import Details from "@theme/Details";
import { BlockMath } from 'react-katex';

export default function Supple({ children, props }: { children: ReactNode, props: string }) {
    return (
      <Details summary={<summary>{props}</summary>}>
        {children}
        機械学習アルゴリズムの最初のページに書いたように、機械学習アルゴリズムは、損失関数が最小になるようにパラメータを調整することで、モデルを学習します。
        ここでは、損失関数として、二乗誤差を用いることにします。線形回帰での損失関数は以下のようになります。
        <BlockMath math="\sum_{i=0}^{n-1} (y_i - (a X_i + b))^2" />
        これが、線形回帰の損失関数です。この損失関数を最小にするように、パラメータa,bを調整します。
        上の二つの方程式は以下の最適化問題を解くことから導出されます。
        <div>
          <BlockMath math="S(a,b) = \min_{a, b} \sum_{i=0}^{n-1} (y_i - (aX_i + b))^2" />
        </div>
        とすると、S を最小にするa,bを求めればいいことになります。偏微分をして、
        <div>
            <BlockMath math="\frac{{\partial}}{{\partial a}} S(a,b) = 0  \iff \sum_{i=0}^{n-1} (y_i - (aX_i + b))X_i = 0" />
        </div>
        <div>
            <BlockMath math="\frac{{\partial}}{{\partial b}} S(a,b) = 0 \iff \sum_{i=0}^{n-1} (y_i - (aX_i + b)) = 0" />
        </div>
        これらを整理することで、上の二つの式が導出されます。
      </Details>
    );
  }