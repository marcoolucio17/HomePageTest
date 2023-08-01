import React from "react";
import { motion } from "framer-motion"; 
import "./styles.css";

const ICards = ({title, text}) => {

    return (
      <div className="text-start py-3">
            <h5 className="card-title">{title}</h5>
            <p className="about-text my-5">
                {text}
            </p>
            <button className="mybtn2">
                Conoce más sobre {title}
            </button>
      </div>
    );
    };

export default ICards;