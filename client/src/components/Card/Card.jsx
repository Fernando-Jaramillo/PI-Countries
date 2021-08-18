import React from "react";
import "./card.css";
import reflection from "../../img/reflect-card.png"

export default function Card({ name, continent, image }) {
    return (
        <div className="card">
            <div className="frame">
                <img src={reflection} alt="" className="reflection"/>
                <img src={image} alt={`bandera de ${name}`} className="img-card" />
                <p className={name.length > 15? "name-smaller" : "name-card"}>{name}</p>
                <p className="continent-card">{continent && continent.toUpperCase()}</p>
            </div>
        </div>
    );
}