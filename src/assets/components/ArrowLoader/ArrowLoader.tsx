import React, { FC } from "react";
import Lottie from "lottie-react";

import loader from "../../loaders/arrowLoader.json";


const ArrowLoader = () => {
    return (
        <Lottie
            style={{ width: 16, height: 16 }}
            animationData={loader}
            loop={true}
        />
    );
};

export default ArrowLoader;