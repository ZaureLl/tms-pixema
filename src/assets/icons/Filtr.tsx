import React from "react";

export const Filtr = ({
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
            <path d="M5 6L19 6M10 12H19M14 18H19" stroke={fill} strokeWidth="2" strokeLinecap="round" fill={fill} />
        </svg>
    );
};