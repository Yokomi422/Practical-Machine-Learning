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
      多項式回帰は線形回帰の一種です。線形回帰ではそれぞれの特徴料は一次式で表されていましたが、多項式回帰ではそれぞれの特徴量の高次の項
            <InlineMath math="x^2 x^3 ・・・ x^n" />
      が追加されます。
      しかし、これらの高次の項は擬似的に新たな特徴量を作り出すだけで、元の特徴量を変換するわけではありません。つまり、前回の線形回帰の最小二乗法などの手法をそのまま使うことができます。それでは、数式を用いて確認してみましょう。
            <InlineMath math="\boldsymbol{X}" />
      は特徴量行列であり、以下のように表されます。
            <BlockMath
                math={
                    "\\begin{pmatrix} 1 & x_1 & x_1^2 & ・ ・ & x_1^n \\\\ 1 & x_2 & x_2^2 & ・ ・ & x_2^n \\\\ ・ & ・ & ・ & ・ ・ & ・ \\\\ ・ & ・ & ・ & ・ ・ & ・ \\\\ 1 & x_m & x_m^2 & ・ ・ & x_m^n\\end{pmatrix}"
                }
            />
      目的変数の
            <InlineMath math="\boldsymbol{y}" />
      とパラメータの
            <InlineMath math="\boldsymbol{\theta}" />
      は以下のようにすると、
            <BlockMath
                math={
                    "\\left( \\begin{array}{c} y_0 \\\\ y_1 \\\\ ・\\\\ ・\\\\ ・ \\\\ y_n \\end{array} \\right)"
                }
            />
            <BlockMath
                math={
                    "\\left( \\begin{array}{c} θ_0 \\\\ θ_1 \\\\ ・\\\\ ・\\\\ ・ \\\\ θ_n \\end{array} \\right)"
                }
            />
      目的変数の
            <InlineMath math="\boldsymbol{y}" />
      は以下のように表されます。
            <BlockMath
                math={"\\boldsymbol{y} = \\boldsymbol{X} \\boldsymbol{\\theta}"}
            />
      これは、前回の線形回帰と同じです。つまり、多項式回帰は線形回帰の一種であることがわかります。
        </Details>
    );
}
