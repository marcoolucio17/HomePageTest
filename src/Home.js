import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import IntroCards from "./IntroCards";
import myImage from "./analitica.png";
import myImage2 from "./objetivo.png";
import myImage3 from "./base-de-datos.png";
import myImage4 from "./Asset 2.png";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="intro text-start col-7">
            <p className="h2">
              <p className="hometitle">Orden Digital</p>
              la plataforma que te permite gestionar fácilmente tus pedidos de forma digital.
            </p>
            <div className="">
              <div className="row">
                <div className="col-4">
                  <Link
                    to="intro-cards-section" // This should match the ID of the section you want to scroll to
                    spy={true}
                    smooth={true}
                    offset={-300}// Adjust the offset to compensate for fixed header height, if any
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <IntroCards />
    </div>
  );
}

export default Home;
