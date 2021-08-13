export default function FilterByAlphabet({ handleFilterByAlphabet }) {
    return (
        <div>
            <label htmlFor="alphabet">Orden alfabético</label>
            <select name="alphabet" id="alphabet" onChange={(e) => handleFilterByAlphabet(e.target.value)}>
                <option value="ascending">A - Z</option>
                <option value="descending">Z - A</option>
            </select>
        </div>
    );
}