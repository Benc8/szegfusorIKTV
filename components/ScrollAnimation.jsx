import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ScrollAnimation() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["100%", "50vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["100vh", "70vh"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-2vw"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "115vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "12px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0]);

  // New transforms for text positioning
  const textSectionOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textSectionY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);

  return (
    <div
      ref={containerRef}
      className="h-[200vh] w-screen overflow-x-hidden relative"
    >
      {/* First section - full screen */}
      <div className="h-screen flex flex-col w-full top-0 z-30">
        <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-4 00 z-40 m-10 relative">
          Szekfusor IKTV
        </h1>
        <p className="text-xl text-purple-200 z-40 ml-10 relative opacity-75 w-1/2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
          ad doloribus eveniet explicabo ipsum minus nulla saepe sapiente sed.
        </p>
      </div>

      {/* Second section - appears next to shrunken image */}
      <motion.div
        className="absolute left-0 w-[48vw] z-40 p-[2vw]"
        style={{
          opacity: textSectionOpacity,
          y: textSectionY,
          top: "115vh", // Matches the image's final y position
        }}
      >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-5xl mb-6">
          Discover More
        </h1>
        <p className="text-xl text-purple-200 opacity-75 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
          ad doloribus eveniet explicabo ipsum minus nulla saepe sapiente sed.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
      </motion.div>

      {/* Background image */}
      <motion.div
        className="absolute top-0 right-0 bg-cover bg-center z-10"
        style={{
          width,
          height,
          x,
          y,
          borderRadius,
          backgroundImage: "url('/mainImg.jpg')",
        }}
      />

      {/* Gradient overlay */}
      <motion.div
        className="absolute top-0 right-0 pointer-events-none z-20"
        style={{
          width,
          height,
          x,
          y,
          borderRadius,
          opacity,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))",
        }}
      />
    </div>
  );
}

export default ScrollAnimation;
