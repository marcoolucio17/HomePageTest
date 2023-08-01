import React from "react";
import { motion, useAnimation } from "framer-motion";
import ICards from "./ICards";
import "./styles.css";


const IntroCards = () => {
  const titles = ["Automatización"];
  const texts = ["Mejora tu servicio y aumenta tus ventas."];

  const controls = useAnimation();

  return (
    <motion.div
      className=""
      initial="offscreen"
      animate={controls}
    >
      <motion.div
        id="intro-cards-section"
        className=""
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 200, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // Adjust the duration and ease
      >
        <ICards title={titles[0]} text={texts[0]} />

      </motion.div>
    </motion.div>
  );
};

export default IntroCards;
