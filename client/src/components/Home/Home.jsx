import React from "react";
import NavBar from "../NavBar/Navbar";
import Cards from "../Cards/Cards";
import { useSate, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions";

export default function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);


    return (
        <div>
            <NavBar/>
            <Cards allCountries={allCountries}/>
            <h1>
                This is home
            </h1>
        </div>
    )



}