import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import "/Users/marcoluciososa/Documents/ReactApps/home-1/src/styles.css";

const LinkTo = ({ to }) => {

  return (
    <div>
        
      <Link
        to= {to} // This should match the ID of the section you want to scroll to
        spy={true}
        smooth={true}
        offset={-200} // Adjust the offset to compensate for fixed header height, if any
        duration={7} // Adjust the duration of the scroll animation
      >
        <button type="button" className="downbutton">
            <strong><i className="fas fa-arrow-down"></i></strong>
        </button>
      </Link>
    </div>
  );
};

export default LinkTo;
