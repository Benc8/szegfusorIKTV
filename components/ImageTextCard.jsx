import React from "react";
import { motion } from "framer-motion";

const ImageTextCard = ({
  titleText,
  pText,
  img,
  imgOnLeft = false,
  className = "",
  titleClassName = "",
  textClassName = "",
  imgClassName = "",
}) => {
  const initialX = imgOnLeft ? 150 : -150;

  return (
    <motion.div
      className={` ${className}`}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div
        className={`flex flex-col lg:flex-row ${
          imgOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Image Side */}
        <div className="w-[50vw] h-[70vh] rounded-xl p-[2vw] ">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Text Side */}
        <div className=" w-[48vw] z-40 ">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-5xl mb-6 mt-20">
            {titleText}
          </h1>
          <p className="text-xl text-purple-200 opacity-75 text-justify">
            {pText}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageTextCard;
