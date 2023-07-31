import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles.css";

const IntroCards = () => {
  const cardVariants = {
    offscreen: { opacity: 0, y: 100, x: -100 }, // Adjust the y and x values
    onscreen: { opacity: 1, y: 0, x: 0 },
  };

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
        <div className="text-start">
          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="card-body">
              <h5 className="card-title">Analítica</h5>
              <p className="about-text">
                Conoce el comportamiento de tus clientes y mejora tu servicio.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="text-end">
          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="card-body">
              <h5 className="card-title">Objetivo</h5>
              <p className="about-text text-end">
                Mejora tu servicio y aumenta tus ventas.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="text-start">
          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="card-body">
              <h5 className="card-title">Base de datos</h5>
              <p className="about-text">
                Guarda la información de tus clientes y accede a ella cuando
                quieras.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroCards;
