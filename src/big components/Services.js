import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import asset1 from "./Asset 1.png"; // Make sure the path is correct
import asset2 from "./Asset 2.png"; // Make sure the path is correct
import asset3 from "./autoicon.png"
import "./otherstyles.css";
import { motion } from "framer-motion";
;

const Services = () => {
  return (
    <div className="services">
      <h1 className="servicestitle">Una suscripción a Orden Digital te ofrece: </h1>
    
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    >
      <div className="">

      <Carousel>
        <Carousel.Item>
            <img className="w-100" src={asset2} alt="First slide" />
          <Carousel.Caption className="mb-5">

              <p className="display-5 mb-5">Interfaces para digitalizar la toma de pedidos.</p>
              
                <Link to = "auto" className="servicesbtn mylink">conocer más</Link>
              

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>

            <img className="w-100" src={asset3} alt="Second slide" />
            

          <Carousel.Caption>
              <p className="display-4">Predicciones sobre gastos & ventas</p>
              <button className="servicesbtn">conocer más</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>

            <img className="w-100" src={asset1} alt="Second slide" />
            

          <Carousel.Caption>
            <p className="display-4">Conexión con 

            <span class="badge bg-danger mx-3 rounded-5">Zapier</span>
            
            </p>

            <button className="servicesbtn">conocer más</button>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      </div>
      </motion.div>
    </div>
  );
};

export default Services;
