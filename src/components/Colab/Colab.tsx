import React from "react";

interface Props {
    url: string;
}

export default function Colab( { url }: Props) {
    return (
        <a href={url} target="_blank">
            <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
        </a>
    )
}