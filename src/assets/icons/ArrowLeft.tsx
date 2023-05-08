import React from "react";

export const ArrowLeft = ({
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
            <path d="M12.5 11L17.5 6M17.5 6L12.5 1M17.5 6H1" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={fill} />
        </svg>
    );
};