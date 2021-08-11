import React from "react";
import "./card.css";

export default function Card({ name, continent, image }) {
    return (
        <div className="card">
        <img src={image} alt={`bandera de ${name}`}/>
        <h1>{name}</h1>
        <h3>{continent}</h3>
        </div>
    );
}