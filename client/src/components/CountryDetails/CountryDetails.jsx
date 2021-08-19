import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { Link } from "react-router-dom";
import btnHome from "../../img/btn-home.png";
import "./countryDetails.css"

export default function Detail(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    }, [dispatch]);

    const detail = useSelector((state) => state.detail);
    console.log(detail)

    return (
        <div className="container-details">
            <Link to="/home"><img src={btnHome} className="btn-home" alt=""/></Link>
            {detail.length > 0 ?(
            <div className="container-left-right">
                <div className="left-det">
                    <img className="flag-deta" src={detail[0].imagenFlag} alt={`bandera de ${detail[0].name}`} />
                </div>
                <div className="right-det">
                    <p className="id-det">{detail[0].id}</p>
                    <p className="name-det">{detail[0].name}</p>
                    <p>Continente: {detail[0].continent}</p>
                    <p>Capital: {detail[0].capital}</p>
                    <p>Subregión: {detail[0].subregion}</p>
                    <p>Área: {detail[0].area} km<sup>2</sup></p>
                    <p>Población: {detail[0].population}</p>
                </div>
            </div>
                ):(
                    <p>Loading...</p>
                )
            }
            <div className="container-act">
            {detail.length > 0 && detail[0].activities.length > 0? 
                detail[0].activities.map(ac =>(
                        <div key={ac.id} className="act">
                            <p>Tipo {ac.name}</p>
                            <p>Dificultad: {ac.dificultyLevel}</p>
                            <p>Tiempo: {ac.term} min.</p>
                            <p>Temporada {ac.season}</p>
                        </div>
                ))
            : 
            <p className="no-act">* No se han creado actividades aun en este pais</p>   
            }
            </div>
        </div>
    );
}
