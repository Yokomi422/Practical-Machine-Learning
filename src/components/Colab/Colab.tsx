import React from "react";

export default function Colab(url: string) {
    return (
        <a href={url} target="_blank">
            <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
        </a>
    )
}