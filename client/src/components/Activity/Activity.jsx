import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions/";
import { Link } from "react-router-dom";
import { postActivity } from "../../actions";


export default function Activity() {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries);
    // body that will be sent in order to post
    const [bodyActivity, setBodyActivity] = useState({
        name:"",
        dificultyLevel:"",
        term:"",
        season:"",
        arrCountries: []
    });

    function handleOnchange(e){
        if(e.target.name === "arrCountries"){
            if(bodyActivity.arrCountries.find(item => item === e.target.value)){
                let removedCountry = bodyActivity.arrCountries.filter(item => item !== e.target.value)
                setBodyActivity({
                    ...bodyActivity,
                    arrCountries: removedCountry
                })
            }else{
                setBodyActivity({
                    ...bodyActivity,
                    arrCountries: [...bodyActivity.arrCountries, e.target.value]
                })
            };
        } else {
            setBodyActivity({
                ...bodyActivity,
                [e.target.name] : e.target.value
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivity(bodyActivity));
        setBodyActivity({
            name:"",
            dificultyLevel:"",
            term:"",
            season:"",
            arrCountries: []
        })
    }

    useEffect(() =>{
        dispatch(getCountries(bodyActivity));
    },[])

    return (
        <div>
            <Link to="/home"><button>Ir a Home</button></Link>
            <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Nombre: </label>
            <input
                onChange={(e) => handleOnchange(e)}
                type="text"
                name="name"
                value={bodyActivity.name}
                id="name"
            />
            <label htmlFor="dificultyLevel">Dificultad: </label>
            <input
                onChange={(e) => handleOnchange(e)}
                type="number"
                name="dificultyLevel"
                value={bodyActivity.dificultyLevel}
                id="dificultyLevel"
            />
            <label htmlFor="term">Duración (min): </label>
            <input
                onChange={(e) => handleOnchange(e)}
                type="text"
                name="term"
                value={bodyActivity.term}
                id="term"
            />
            <label htmlFor="season">Temporada: </label>
            <select onChange={(e) => handleOnchange(e)} name="season" id="season">
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
                <option value="Verano">Verano</option>
                <option value="Primavera">Primavera</option>
            </select>
            <label htmlFor="arrCountries">Países: </label>
            <select
                onChange={(e) => handleOnchange(e)}
                name="arrCountries"
                id="arrCountries"
            >
                {allCountries.map((c) => (
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
                ))}
            </select>
            <span>Has selccionado estos países: </span>
            {bodyActivity.arrCountries.map((item) => (
                <span>{item}, </span>
            ))}
            <button type="submit">Crear Actividad</button>
            </form>
            <Link to="/activity">
            <button>Nueva Actividad</button>
            </Link>
        </div>
    );
}