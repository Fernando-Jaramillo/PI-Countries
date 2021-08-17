import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import "./navbar.css";
import Search from "../Search/Search"
import { getCountries } from "../../actions"

export default function Navbar({ handleGetSearch }) {
    return (
        <div>
            <h3>Navbar</h3>
            <Link to="/home">Home</Link>
            <Link to="/activity">Crear Actividad</Link>
            <Search handleGetSearch={handleGetSearch}/>
        </div>
    );
}