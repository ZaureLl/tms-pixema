import React from "react";

export const ArrowRight = ({
    width = "19",
    height = "12",
    fill = "#AFB2B6",
    className = "string",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 19 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6.5 11L1.5 6M1.5 6L6.5 1M1.5 6H18" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={fill} />
        </svg>
    );
};
