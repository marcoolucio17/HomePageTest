// About.js

import React from 'react';
import "./styles.css"

const About = () => {
    return (
        <div className = "page-body">
            <div className = "container mycontainermargin">
                <div className = "row align-items-center">
                    <div className = "col-md-5 mx-auto">
                        <p className = "display-3 text-start">¿Qué es OrdenDigital?</p>
                        
                    </div>
                    <div className = "col-md-5 mx-auto">
                        <p className = "about-text"><strong>OrdenDigital</strong> es una plataforma que te permite gestionar fácilmente tus pedidos de forma digital.</p>
                    </div>
                </div>
            </div>

            <hr className = "myhr" />

            <div className = "container mycontainermargin">
                <div className = "row align-items-center">
                    <div className = "col-md-5 mx-auto">
                        <p className = "display-3 text-start">¿Cómo funciona?</p>
                    </div>
                    <div className = "col-md-5 mx-auto">
                        <p className = "about-text"><strong>OrdenDigital</strong> te permite crear una cuenta de forma gratuita y empezar a gestionar tus pedidos de forma digital. Puedes crear una cuenta de forma gratuita y empezar a gestionar tus pedidos de forma digital.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;