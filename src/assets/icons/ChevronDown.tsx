import React from "react";

export const ChevronDown = ({
    width = "12",
    height = "7",
    fill = "white",
    className = "string",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11 1L6 5L1 1" stroke="#AFB2B6" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};