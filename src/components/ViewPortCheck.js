import React, { useState, useEffect } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import ScrollViewport from "./ScrollViewport";
import { LinearProgress } from "@material-ui/core";

function ViewPortCheck() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    yRange.onChange((v) => {
      setIsComplete(v >= 1);
      console.log(v);
      setProgress(v * 100);
    });
    console.log(yRange);
  }, [yRange]);

  return (
    <div className="viewport">
      <div>
        <LinearProgress
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor:'transparent',
            height: 10,
            // border: "1px solid white",
            width: '100vw'
          }}
          variant="determinate"
          value={progress}
        />
      </div>

      <div
        style={{
          position: "fixed",
          border: "1px solid white",
          minWidth: 200,
          minHeight: 200,
        }}
      >
        <svg className="progress-icon" viewBox="0 0 60 60">
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1, // Reverse direction of line animation
            }}
          />
          <motion.path
            fill="none"
            strokeWidth="5"
            stroke="white"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
      </div>
      <div>
        <ScrollViewport />
      </div>
    </div>
  );
}

export default ViewPortCheck;
