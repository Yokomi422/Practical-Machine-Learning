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
      
    </Details>
  );
}
