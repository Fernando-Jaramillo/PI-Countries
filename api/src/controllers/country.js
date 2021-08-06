const { Country } = require('../db');
const axios = require('axios');
const {
    ALL_COUNTRIES,
    COUNTRIES_BY_NAME,
    ONE_COUNTRY_BY_CODE,
} = require("../../constants");

async function getAllCountries (req, res, next){
    const gottenCountries = await axios.get(`${ALL_COUNTRIES}`);
    const countriesArr = gottenCountries.data;
    let countriesMap = await countriesArr.map(c => {
        let country = {
            name: c.name,
            id : c.alpha3Code,
            imagenFlag: c.flag,
            continent: c.region,
            capital: c.capital,
            subregion: c.subregion,
            area: c.area,
            population: c.population
        };
        Country.create(country)
        return country
    });
    return res.send(countriesMap);
}

async function getCountryById(req, res, next){
    const country = await axios.get(`${ONE_COUNTRY_BY_CODE}${req.params.id}`);
    return res.send(country.data);
} 

module.exports = {
  getAllCountries,
  getCountryById,
};