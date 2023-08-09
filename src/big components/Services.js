import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import asset1 from "./Asset 1.png"; // Make sure the path is correct
import asset2 from "./Asset 2.png"; // Make sure the path is correct
import asset3 from "./autoicon.png"
import "./otherstyles.css";
import { motion } from "framer-motion";
import Auto from "../mid components/Auto";

const Services = () => {
  return (
    <div className="services">
    
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    >

      <Carousel>
        <Carousel.Item>
            <img className="w-100" src={asset2} alt="First slide" />
          <Carousel.Caption>
            <p className="display-5">Interfaz para digitalizar toma de pedidos.</p>
            <button className="servicesbtn">conocer más</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>

            <img className="w-100" src={asset3} alt="Second slide" />
            

          <Carousel.Caption>
            <p className="display-4">Predicciones sobre gastos & ventas</p>
            <button className="servicesbtn">conocer más</button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
      </motion.div>
    </div>
  );
};

export default Services;
