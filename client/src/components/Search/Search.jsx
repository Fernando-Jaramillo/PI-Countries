import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../actions";
import { getSearch } from "../../actions";




export default function Search({ handleGetSearch }) {
    
    const dispatch = useDispatch();
    const [text, setText] = useState();

    function handleOncahnge(name){
        setText(name)
    }
    function handleOnSubmit(e){
        e.preventDefault();
        dispatch(getSearch(text));
        setText("");
    }
    return(
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <label htmlFor="title" >Buscar Paises</label>
            <input onChange={(e) => handleOncahnge(e.target.value)} type="text" id="title" placeholder="buscar" value={text}/>
            <button type="submit">Buscar</button>
        </form>
    )
}