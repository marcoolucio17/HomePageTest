import React from "react";
import { motion } from "framer-motion"; 
import "./styles.css";

const ICards = ({title, text, image}) => {

    return (
      <div className="text-start container introcards p-3">
            <p className="introtext">
                {text}
            </p>
            <div className="text-center btncont">
                <button className="introbutton">
                    Conoce más sobre {title}
                </button>
            </div>
      </div>
    );
    };

export default ICards;