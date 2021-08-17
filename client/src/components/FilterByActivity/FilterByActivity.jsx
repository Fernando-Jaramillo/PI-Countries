import React from "react";
import { useSelector } from "react-redux";

export default function FilterByActivity({ handleFilterByActivity }) {
    const allActivities = useSelector(state => state.activities)

    return (
        <div>
            <label htmlFor="activity">Seleccionar por actividades</label>
            <select name="activity" id="activity" onChange={(e) => handleFilterByActivity(e.target.value)}>
                {allActivities.length > 0 && allActivities.map( act => (
                        <option key={act.id} value={act.name}>{act.name}</option>  
                        ))}
            </select>
        </div>
    );
}