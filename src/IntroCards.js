import React from "react";
import { motion, useAnimation } from "framer-motion";
import ICards from "./ICards";
import "./styles.css";


const IntroCards = () => {
  const titles = ["Automatización", "Base de datos", "Eficiencia"];
  const texts = ["Mejora tu servicio y aumenta tus ventas.", "Guarda los pedidos de forma digital de tus clientes y accede a ella cuando quieras.", "No llenes la fecha cien veces. Deja que el sistema lo haga por ti."];

  const controls = useAnimation();

  return (
    <motion.div
      className="container cards"
      initial="offscreen"
      animate={controls}
    >
      <motion.div
        id="intro-cards-section"
        className="row align-items-top"
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 200, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // Adjust the duration and ease
      >
        <ICards title={titles[0]} text={texts[0]} />
        <ICards title={titles[1]} text={texts[1]} />
        <ICards title={titles[2]} text={texts[2]} />

      </motion.div>
    </motion.div>
  );
};

export default IntroCards;
