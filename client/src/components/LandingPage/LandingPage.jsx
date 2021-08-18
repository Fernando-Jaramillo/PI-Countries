import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css"
import logo from "../../img/logo1.png";

export default function LandingPage() {
    return (
        <div className="background">
            <div className="container-land">
                <img className="img-land" src={logo} alt="world" />
                <Link to="/home">
                    <button className="butt-lan">VEAMOS LOS COUNTRIES</button>
                </Link>
            </div>
        </div>
    );
}