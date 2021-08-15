import React from "react";
import NavBar from "../NavBar/Navbar";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters"

import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getCountries, 
    filterByContinent, 
    orderByAlphabet,
    getByPopulation
    } from "../../actions";

export default function Home() {
  // getting all countries
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getCountries());
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
    
    return (
        <div>
        <NavBar />
        <Filters
            handleFilterByContinent={handleFilterByContinent}
            handleFilterByAlphabet={handleFilterByAlphabet}
            handleFilterByPopulation={handleFilterByPopulation}
        />
        <Cards
            allCountries={allCountries}
            indexOfLastCountry={indexOfLastCountry}
            indexofFirstCountry={indexofFirstCountry}
        />
        <Pagination
            totalCountries={allCountries.length}
            numbersPerpage={numbersPerPage}
            paginate={paginate}
        />
        </div>
    );
}