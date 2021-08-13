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
        orderByAlphabet 
        } from "../../actions";

export default function Home() {
    // getting all countries
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    // Pagination
    const[currentPage, setCurrentPage] = useState(1);
    const[numbersPerPage] = useState(9);
    const indexOfLastCountry = currentPage * numbersPerPage;
    const indexofFirstCountry = indexOfLastCountry - numbersPerPage;
    const paginate = (num) => setCurrentPage(num)

    // getting all countries
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    // FILTERS
    // filter by continent
    const handleFilterByContinent = (value) => {
        dispatch(filterByContinent(value));
    } 
      // filter by alphabet
    const handleFilterByAlphabet = (value) => {
        dispatch(orderByAlphabet(value));
        setCurrentPage(1)
    }


    return (
        <div>
            <NavBar />
            <Filters 
                handleFilterByContinent={handleFilterByContinent} 
                handleFilterByAlphabet={handleFilterByAlphabet}/>
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