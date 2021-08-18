import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import btnNew from "../../img/btn-new-act.png";

export default function Navbar() {
    return (
        <div>
            <Link to="/activity">
            <img src={btnNew} alt="" className="btn-crear"/>
            </Link>
        </div>
    );
}