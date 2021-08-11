import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../actions";

export default function Search() {
    return(
        <form>
            <label htmlFor="title" >Buscar Paises</label>
            <input type="text" id="title"/>
            <button type="submit">Buscar</button>
        </form>
    )
}