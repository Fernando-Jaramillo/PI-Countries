import React from "react";
import NavBar from "../NavBar/Navbar";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions";

export default function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    const[currentPage, setCurrentPage] = useState(1);
    const[numbersPerPage, setNumbersPerPage] = useState(9);
    const indexOfLastCountry = currentPage * numbersPerPage;
    const indexofFirstCountry = indexOfLastCountry - numbersPerPage;

    const paginate = (num) => setCurrentPage(num)

    useEffect(() => {
        dispatch(getCountries());
    }, []);
    

    return (
        <div>
            <NavBar />
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