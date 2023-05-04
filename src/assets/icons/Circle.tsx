import React from "react";

export const Circle = ({
    width = "4",
    height = "4",
    fill = "#AFB2B6",
    className = "string",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="2" cy="2" r="2"
                fill={fill} />
        </svg>
    );
};