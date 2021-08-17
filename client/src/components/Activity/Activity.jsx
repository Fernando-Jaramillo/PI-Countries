import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions/";
import { Link } from "react-router-dom";
import { postActivity } from "../../actions";
// error control
function validate(state) {
    let errors = {};
    if(!state.name){
        errors.name = "el nombre de la actividad es requerida";
    } else if (!state.dificultyLevel) {
        errors.dificultyLevel = "La dificultad de la actividad es requerida";
    } else if (Number(state.dificultyLevel) > 5){
        errors.dificultyLevel = "El nivel máximo de dificultad es 5";
    }else if(!state.term){
        errors.term = "El tiempo de la actividad es requerido";
    }else if(isNaN(state.term)){
        errors.term = "El tiempo de la actividad debe ser un número";
    }else if(state.term % 1 !== 0){
        errors.term = "El tiempo de la actividade debe ser representado en numeros enteros"
    }else if(!state.season){
        errors.season = "la temporada es requerida"
    }else if(!state.arrCountries.lenght < 1){
        errors.arrCountries = "selecciona al menos un país donde se realiza esta actividad";
    }
    return errors;
}

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
    // state to controlate errors
    const [errors, setErrors] = useState({});

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
        setErrors(validate({
            ...bodyActivity,
                [e.target.name] : e.target.value
        }));
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
        });
        alert('actividad creada..!');
    }

    useEffect(() =>{
        dispatch(getCountries());
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
            {errors.name && <p>{errors.name}</p>}
            <label htmlFor="dificultyLevel">Dificultad: </label>
            <input
                onChange={(e) => handleOnchange(e)}
                type="number"
                name="dificultyLevel"
                value={bodyActivity.dificultyLevel}
                id="dificultyLevel"
            />
            {errors.dificultyLevel && <p>{errors.dificultyLevel}</p>}
            <label htmlFor="term">Duración (min): </label>
            <input
                onChange={(e) => handleOnchange(e)}
                type="text"
                name="term"
                value={bodyActivity.term}
                id="term"
            />
            {errors.term && <p>{errors.term}</p>}
            <label htmlFor="season">Temporada: </label>
            <select onChange={(e) => handleOnchange(e)} name="season" id="season">
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
                <option value="Verano">Verano</option>
                <option value="Primavera">Primavera</option>
            </select>
            {errors.season && <p>{errors.season}</p>}
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
            {errors.arrCountries && <p>{errors.arrCountries}</p>}
            {bodyActivity.arrCountries.length > 0 && <span>Has seleccionado estos países: </span>}
            {bodyActivity.arrCountries.map((item) => (
                <span key={item}>{item}, </span>
            ))}
            <button type="submit">Crear Actividad</button>
            </form>
            <Link to="/activity">
            <button>Nueva Actividad</button>
            </Link>
        </div>
    );
}