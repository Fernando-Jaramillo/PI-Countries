import React from "react";
import "./card.css";

export default function Card({ name, continent, image }) {
  return (
    <div class="card" border-color="red" width="300px">
      <img src={image} width="200px" alt={`bandera de ${name}`}/>
    <h1>{name}</h1>
    <h3>{continent}</h3>
    </div>
  );
}