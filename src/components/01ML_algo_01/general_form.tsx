import React, { type ReactNode } from "react";
import Details from "@theme/Details";
import { BlockMath, InlineMath } from "react-katex";

export default function Supple({
  children,
  props,
}: {
  children: ReactNode;
  props: string;
}) {
  return (
    <Details summary={<summary>{props}</summary>}>
      {children}
      説明変数が一つと二つの場合については、上で見てきました。
      では、説明変数が三つ以上の場合はどうなるでしょうか。
      確かに、上と同様に具体的に条件式を列挙することも可能ですが、説明変数が増加すると、その分式が増えていきます。
      そこで、行列を用いて一般化してみましょう。 説明変数が2個以上になる場合は、
      <InlineMath math="x" />
      をベクトルとして
      <InlineMath math="\hat{y}" />
      を表現します。 ここで、
      <InlineMath math="\boldsymbol{θ}" />は
      <BlockMath
        math={`\\left( \\begin{array}{c} θ_0 \\\\ θ_1 \\\\ ・\\\\ ・\\\\ ・ \\\\ θ_n \\end{array} \\right)`}
      />
      <InlineMath math="\boldsymbol{X}" />
      は、
      <BlockMath
        math={`\\begin{pmatrix} 1 & x_{1 1} & x_{1 2} & ・ ・ & x_{1 n} \\\\ 1 & x_{2 1} & x_{2 2} & ・ ・ & x_{2 n} \\\\ ・ & ・ & ・ & ・ ・ & ・ \\\\ ・ & ・ & ・ & ・ ・ & ・ \\\\ 1 & x_{m 1} & x_{m 2} & ・ ・ & x_{m n}\\end{pmatrix}`}
      />
      とする。一つのデータの特徴量は一行に並んでいるとします。目的変数のベクトル
      <InlineMath math="y" />は
      <BlockMath math="\boldsymbol{y} = \boldsymbol{X} \boldsymbol{\theta}" />
      となります。 正規方程式を一般形で表すと、以下のようになります。
      <BlockMath math="\boldsymbol{θ} = (\boldsymbol{X}^\mathsf{T} \boldsymbol{X})^{-1} \boldsymbol{X}^\mathsf{T} \boldsymbol{y}" />
      では、これを丁寧に導出していきましょう。
      上では、目的変数yが一つの場合を考えましたが、今回は目的変数yがm個ある場合を考えます。前回と同様に、損失関数は最小二乗誤差(MSE
      Mean Squared Error) を用います。
      <InlineMath math="\boldsymbol{y}" />
      は、
      <BlockMath
        math={`\\left( \\begin{array}{c} y_1 \\\\ y_2 \\\\ ・\\\\ ・\\\\ ・ \\\\ y_m \\end{array} \\right)`}
      />
      です。 MSEは以下の式で計算されます。 ここで、
      <InlineMath math="x_i" />は<InlineMath math="\boldsymbol{X}" />
      のi目です。
      <BlockMath math="MSE = \frac{1}{2 m} \sum_{i=1}^{m} (y_i - \boldsymbol{θ}^\mathsf{T} \boldsymbol{x_i})^2" />
      θそれぞれについて偏微分をしましょう。
      <BlockMath math="\frac{\partial}{\partial \theta} \text{MSE}(\theta) = \frac{\partial}{\partial \theta} \left( \frac{1}{2m} \sum_{i=1}^{m} (y_i - \theta^T x_i)^2 \right)" />
      <BlockMath math="\frac{\partial}{\partial \theta} \left( \frac{1}{2m} \sum_{i=1}^{m} (y_i - \theta^T x_i)^2 \right) = \frac{1}{m} \sum_{i=1}^{m} (y_i - \theta^T x_i)(-x_i)" />
      よって、
      <BlockMath math="\frac{\partial}{\partial \theta} \text{MSE}(\theta) = -\frac{1}{m} \sum_{i=1}^{m} (y_i - \theta^T x_i) x_i" />
      となります。これが
      <InlineMath math="\boldsymbol{0}" />
      になればいいので、
      <BlockMath math="-\frac{1}{m} \sum_{i=1}^{m} (y_i - \theta^T x_i) x_i = \boldsymbol{0}" />
      そして、行列の形で表現すると、以下のようになります。
      <BlockMath math="X^T(X\theta - y) = 0" />
      これを直感的には分かりずらいかもしれませんが、
      <InlineMath math="\sum" />
      を分解して、分解した式を行列で表現すると、上の式になります。 
      <InlineMath math="y_i - \theta^T x_i" />
      がスカラー値であることもポイントです。
      これを
      <InlineMath math="\boldsymbol{θ}" />
      について解くと、
      <BlockMath math="\boldsymbol{θ} = (\boldsymbol{X}^\mathsf{T} \boldsymbol{X})^{-1} \boldsymbol{X}^\mathsf{T} \boldsymbol{y}" />
      となります。これが正規方程式です。 ただし、
      <InlineMath math="\boldsymbol{X}^\mathsf{T} \boldsymbol{X}" />
      が正則である必要があります。
    </Details>
  );
}
