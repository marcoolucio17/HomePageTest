import React from "react";
import { motion, useAnimation } from "framer-motion";
import myImage from "./nodeimgage.png"
import ICards from "./ICards";
import "./styles.css";


const IntroCards = () => {
  const titles = ["Automatización", "Seguridad", "Eficiencia"];
  const texts = ["Mejora tu servicio y aumenta tus ventas. Automatiza tus procesos de negocio y deja que la tecnología trabaje para ti.", "Protege la información de tus clientes y de tu negocio. Orden Digital cuenta con los más altos estándares de seguridad.", "Ahorra tiempo y dinero. Orden Digital te permite gestionar tus pedidos de forma digital, sin necesidad de invertir en hardware o software adicional."];

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
        <div className="newbackground">
          <ICards title={titles[0]} text={texts[0]} image = {myImage}/>
        </div>
        <div className="newbackground2">
          <ICards title={titles[1]} text={texts[1]} image = {myImage}/>
        </div>
        <div className="newbackground3">
          <ICards title={titles[2]} text={texts[2]} image = {myImage}/>
        </div>


      </motion.div>
    </motion.div>
  );
};

export default IntroCards;
