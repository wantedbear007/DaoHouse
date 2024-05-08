import React from "react";
import { Lottie } from "lottie-react";
import circleAnimation from "./circle-animation.json";

const RotatingBalls = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Lottie animationData={circleAnimation} autoPlay loop />
    </div>
  );
};

export default RotatingBalls;
