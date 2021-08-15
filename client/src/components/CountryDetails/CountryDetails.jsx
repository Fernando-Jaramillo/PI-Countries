export default function CountryDetails(){
    return(
        <div>
            <form>
                <input type="text" name="name" value=""/>
                <input type="number" name="dificultyLevel" value=""/>
                <input type="text" name="term" value=""/>
                <select>
                    <option value="otoño">Otoño</option>
                    <option value="invierno">Invierno</option>
                    <option value="verano">Verano</option>
                    <option value="primavera">Primavera</option>
                </select>
            </form>
        </div>
    )
}