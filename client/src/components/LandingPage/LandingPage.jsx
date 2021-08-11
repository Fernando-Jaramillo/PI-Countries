import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
        <div>
            <h1>Este es Landing Page</h1>
            <Link to="/home"><button>Lets go for countries</button></Link>
        </div>
    )
}