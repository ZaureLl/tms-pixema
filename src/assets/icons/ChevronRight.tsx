import React from "react";

export const ChevronRight = ({
    width = "24",
    height = "24",
    fill = "white",
    className = "string",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 7L14 12L10 17" stroke="#AFB2B6" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};