import React, { type ReactNode } from "react";
import Details from "@theme/Details";
import "katex/dist/katex.min.css";

export default function Answer({
    children,
    props,
}: {
  children: ReactNode;
  props: string;
}) {
    return <Details summary={<summary>{props}</summary>}>{children}</Details>;
}
