import React from "react";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

const OneElementFading = () => {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -100, y: 300, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 300, opacity: 0 },
  });

  return (
    <div className="OneElementFading">
      <h2>One element fading in and out</h2>
      <button
        onClick={() => {
          setIsVisible((v) => !v);
        }}
      >
        {isVisible ? "Unmount" : "Mount"}
      </button>
      <div className="container">
        {transition((style, item) =>
          item ? <animated.div style={style} className="item" /> : ""
        )}
      </div>
    </div>
  );
};

export default OneElementFading;
