import React from "react";
import NavBar from "../NavBar/Navbar";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters"
import "./home.css"
import logoHor from "../../img/logo-hor.png"

import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterByContinent,
  orderByAlphabet,
  getByPopulation,
  getActivities,
  filterByActivity
} from "../../actions";

export default function Home() {
    const dispatch = useDispatch();
    // getting all countries
    const allCountries = useSelector(state => state.countries);
    // getting all activities
    const allActivities = useSelector(state => state.activities);

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [numbersPerPage] = useState(9);
    const indexOfLastCountry = currentPage * numbersPerPage;
    const indexofFirstCountry = indexOfLastCountry - numbersPerPage;
    const paginate = (num) => setCurrentPage(num);

    // FILTERS
    // filter by continent
    const handleFilterByContinent = (value) => {
        dispatch(filterByContinent(value));
        setCurrentPage(1);
    };
    // filter by alphabet
    const [order, setOrder] = useState("");
    const handleFilterByAlphabet = (value) => {
        dispatch(orderByAlphabet(value));
        setCurrentPage(1);
        setOrder(`the order is ${value}`);
    };
    // filter by population
    const handleFilterByPopulation = (edge) => {
        dispatch(getByPopulation(edge));
        setCurrentPage(1);
        setOrder(`the order is ${edge}`);
    }

    const handleFilterByActivity = (act) => {
        dispatch(filterByActivity(act));
        setCurrentPage(1);
    }
    
    return (
        <div className="container-home">
            <div className="left-home">
                <img src={logoHor} className="logo-home" alt="logo of the website"/>
                <Filters
                    handleFilterByContinent={handleFilterByContinent}
                    handleFilterByAlphabet={handleFilterByAlphabet}
                    handleFilterByPopulation={handleFilterByPopulation}
                    handleFilterByActivity={handleFilterByActivity}
                />
                <div className="pag-home">
                    <Pagination
                        totalCountries={allCountries.length}
                        numbersPerpage={numbersPerPage}
                        paginate={paginate}
                    />
                </div>
            </div>
            <div className="right-home">
                <NavBar />
                <Cards
                    allCountries={allCountries}
                    indexOfLastCountry={indexOfLastCountry}
                    indexofFirstCountry={indexofFirstCountry}
                />
            </div>
        </div>
    );
}