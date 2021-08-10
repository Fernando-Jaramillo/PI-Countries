import React from "react";
import NavBar from "./Navbar";
import { useSate, useEffect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions"

export default function Home() {
    return (
        <div>
            <NavBar/>
            <h1>
                This is home
            </h1>
        </div>
    )
}