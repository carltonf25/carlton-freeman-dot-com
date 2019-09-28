import React from "react";
import { useSpring, animated } from "react-spring";

const BackToTopButton = () => {
  let windowSize = window.innerWidth;

  const slideIn = useSpring({
    from: {
      transform: `translate3d( 300px, 0, 0)`
    },
    to: {
      transform: `translate3d(0,0,0)`
    }
  });
  return (
    <animated.button
      id="back-btn"
      style={{ ...slideIn }}
      onClick={() =>
        window.scrollTo({
          top: `0`,
          behavior: "smooth"
        })
      }
    >
      <span style={{ fontSize: `18px` }}>☝️</span>
    </animated.button>
  );
};

export default BackToTopButton;
