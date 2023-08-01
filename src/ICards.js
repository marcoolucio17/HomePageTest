import React from "react";
import { motion } from "framer-motion"; 
import "./styles.css";

const ICards = ({title, text}) => {

    return (
      <div className="card text-start">
        <div
          className="container"
        >
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="about-text">
                {text}
            </p>
            <button className="mybtn2">
                Conoce más sobre {title}
            </button>
          </div>
        </div>
      </div>
    );
    };

export default ICards;