import React from "react";
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
          <div className="intro text-start col-6">
            <p className="h2">
              <p className="hometitle">Orden Digital</p>
              la plataforma que te
              permite gestionar fácilmente tus pedidos de forma digital.
            </p>

            <div className="">
              <div className="row">
                <div className = "col-4">
            <button
              type="button"
              className="btn btn-lg fw-bold rounded-5 border-black"
            >
              Conoce más
            </button>
            </div>

            </div>
            </div>
          </div>

          <div className = "hometable my-5">
            <div className = "row">
                <div className = "col-lg-3 mx-auto">
                    <p className = "hometable-header mybtn">Automatización</p>
                    <img src = {myImage} alt = "analitica" className = "img-fluid my-5"/>
                    <div className="container my-3">
                        <p className = "">En vez de anotar la misma fecha 100 veces, deja que el sistema lo haga por ti.</p>
                    </div>
                </div>

                <div className = "col-lg-3 mx-auto">
                    <p className = "hometable-header mybtn">Generación</p>
                    <img src = {myImage2} alt = "analitica" className = "img-fluid my-5"/>
                    <div className="container my-3">
                        <p className = "">Genera reportes de tus ventas y pedidos de forma automática.</p>
                    </div>
                </div>

                <div className = "col-lg-3">
                    <p className = "hometable-header mybtn">Optimización</p>
                    <img src = {myImage3} alt = "analitica" className = "img-fluid my-5 mx-auto" style={{"width":"70%"}}/>
                    <div className="container my-4">
                        <p className = "">Optimiza tus procesos de venta y entrega de pedidos, consigue más tiempo para ventas. </p>
                    </div>
                </div>   
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
