import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { Link } from "react-router-dom";

export default function Detail(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    }, [dispatch]);

    const detail = useSelector((state) => state.detail);
    console.log(detail)

    return (
        <div>
            {detail.length > 0 ?(
            <div>
                <h1>Nombre: {detail[0].name}</h1>
                <p>ID: {detail[0].id}</p>
                <img src={detail[0].imagenFlag} alt={`bandera de ${detail[0].name}`}/>
                <p>Continente: {detail[0].continent}</p>
                <p>Capital: {detail[0].capital}</p>
                <p>Subregión {detail[0].subregion}</p>
                <p>Área: {detail[0].area} km<sup>2</sup></p>
                <p>Población: {detail[0].population}</p>
            </div>
                ):(
                    <p>Loading...</p>
                )
            }
            {detail.length > 0 && detail[0].activities.length > 0? 
                detail[0].activities.map(ac =>(
                        <div key={ac.id}>
                            <p>Tipo {ac.name}</p>
                            <p>Dificultad: {ac.dificultyLevel}</p>
                            <p>Tiempo: {ac.term} min.</p>
                            <p>Temporada {ac.season}</p>
                        </div>
                ))
            : 
            <p>no se han creado actividades aun en este pais</p>   
            }
            
            <Link to="/home"><button>Home</button></Link>
        </div>
    );
}
