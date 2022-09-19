import React from "react";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

const StaggeredAnimation = () => {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -100, y: 300, opacity: 0, width: 10, height: 10 },
    enter: (item) => async (next) => {
      await next({ y: item.enter.y, opacity: 1, delay: item.enter.delay });
      await next({ x: 0, width: 100, height: 100 });
    },
    leave: (item) => async (next) => {
      await next({ x: 100, delay: item.enter.delay, width: 10, height: 10 });
      await next({ y: item.leave.y, opacity: 0, delay: item.leave.delay });
    },
  });

  return (
    <div className="StaggeredAnimation">
      <h2>
        Multiple elements, with staggered animation <br />
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
                    leave: { y: 100, delay: 1000 },
                  },
                  {
                    enter: { y: 0, delay: 400 },
                    leave: { y: 100, delay: 600 },
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

export default StaggeredAnimation;
