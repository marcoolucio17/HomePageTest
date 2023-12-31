import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import IntroCards from "../mid components/IntroCards";
import "/Users/marcoluciososa/Documents/ReactApps/home-1/src/App.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            id = "home-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >

          <div className="intro text-start col-8">
            <p className="h2">

              
              <p className="hometitle">Orden Digital.</p>
              la plataforma que te permite gestionar fácilmente tus pedidos de forma digital.
            </p>
                  <Link
                    to="intro-cards-section" // This should match the ID of the section you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-200}// Adjust the offset to compensate for fixed header height, if any
                    duration={5} // Adjust the duration of the scroll animation
                  >
                    <button
                      type="button"
                      className="btn btn-lg fw-bold rounded-5 border-black"
                    >
                      Conoce más
                    </button>
                  </Link>

          </div>
          </motion.div>
        </div>
      </div>

      <div className="card-section">
        <IntroCards />
      </div>
    </div>
  );
}

export default Home;
