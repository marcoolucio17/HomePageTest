import React from "react";
import { motion, useAnimation } from "framer-motion";
import ICards from "../small components/ICards";
import LinkTo from "../small components/LinkTo";
import { Link } from "react-scroll";
import "/Users/marcoluciososa/Documents/ReactApps/home-1/src/styles.css";

const IntroCards = () => {
  const titles = ["Automatización", "Seguridad", "Eficiencia"];
  const texts = [
    "Mejora tu servicio y aumenta tus ventas. Automatiza tus procesos de negocio y deja que la tecnología trabaje para ti.",
    "Protege la información de tus clientes y de tu negocio. Orden Digital cuenta con los más altos estándares de seguridad.",
    "Ahorra tiempo y dinero. Orden Digital te permite gestionar tus pedidos de forma digital, sin necesidad de invertir en hardware o software adicional.",
  ];

  const controls = useAnimation();

  const myIDs = ["intro1", "intro2", "intro3"]

  return (
    <motion.div className="" initial="offscreen" animate={controls}>

      <motion.div
        id="intro-cards-section"
        className=""
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 200, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // Adjust the duration and ease
      >

        
        <div className="newbackground">
          <ICards title={titles[0]} text={texts[0]} />
          <LinkTo to= {myIDs[1]} />
        </div>


        <motion.div
          id = {myIDs[1]}
          className=""
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: 200, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Adjust the duration and ease
        >
        <div className="newbackground2">
          <ICards title={titles[1]} text={texts[1]} />
          <LinkTo to= {myIDs[2]} />
        </div>
        </motion.div>


        <motion.div
        id = {myIDs[2]}
        className=""
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 200, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // Adjust the duration and ease
        >

        <div className="newbackground3">
          <ICards title={titles[2]} text={texts[2]} />
          <LinkTo to= "home-section" />
        </div>
        </motion.div>


      </motion.div>

    </motion.div>
  );
};

export default IntroCards;
