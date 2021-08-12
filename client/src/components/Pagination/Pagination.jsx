import React from "react";

export default function Pagination({ totalCountries, numbersPerpage, paginate }) {
    let totalPages = Math.ceil(totalCountries / numbersPerpage)
    let pageNumbers = [];
    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            {
            pageNumbers.map(num => 
                <button key={num} onClick={() => paginate(num)}>{num}</button>
                )
            }
        </div>
        )
}