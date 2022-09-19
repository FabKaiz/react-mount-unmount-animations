import React from "react";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

const MultipleElementsFading = () => {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -100, y: 300, opacity: 0 },
    enter: (item) => (next) =>
      next({ x: 0, y: item.enter.y, opacity: 1, delay: item.enter.delay }),
    leave: (item) => (next) =>
      next({ x: 100, y: item.leave.y, opacity: 0, delay: item.leave.delay }),
  });

  return (
    <div className="MultipleElementsFading">
      <h2>
        Multiple elements fading in and out with 200ms delay <br />
        and custom atributes
      </h2>
      <button
        onClick={() => {
          setItems((v) =>
            v.length
              ? []
              : [
                  {
                    enter: { y: -25, delay: 200 },
                    leave: { y: 100, delay: 600 },
                  },
                  {
                    enter: { y: 0, delay: 400 },
                    leave: { y: 100, delay: 400 },
                  },
                  {
                    enter: { y: 25, delay: 600 },
                    leave: { y: 100, delay: 200 },
                  },
                ]
          );
        }}
      >
        {items.length ? "Unmount" : "Mount"}
      </button>
      <div className="container">
        {transition((style, item) =>
          item ? <animated.div style={style} className="item" /> : ""
        )}
      </div>
    </div>
  );
};

export default MultipleElementsFading;
