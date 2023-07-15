import React, { type ReactNode } from "react";
import Details from "@theme/Details";

export default function Supple({
    props,
}: {
  children: ReactNode;
  props: string;
}) {
    return <Details summary={<summary>{props}</summary>}></Details>;
}
