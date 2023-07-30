import React from "react";
import myImage from "./analitica.png";
import "./App.css"

function Home() {
  return (
    <div className="home">
      <div className="container">
    
          <div className="customcontainer text-start">
            <p className="h2">
              Bienvenido a <strong>OrdenDigital</strong>, la plataforma que te permite gestionar tus pedidos de forma digital.
            </p>
          </div>

        <div class="container my-2" role="group">
            <button type="button" class="btn btn-lg btn-warning fw-bold rounded-5 border-black">Suscríbete</button>
        </div>

        </div>

    </div>
  );
}

export default Home;
