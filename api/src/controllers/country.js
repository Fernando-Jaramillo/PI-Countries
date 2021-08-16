const { Country, Activity } = require('../db');
const axios = require('axios');
const {
    ALL_COUNTRIES,
    COUNTRIES_BY_NAME,
} = require("../../constants");
// const Activity = require('../models/Activity');

// Function to bring the data from the appi and save in our DB
async function getAll() {
    try{
    const gottenCountries = await axios.get(`${ALL_COUNTRIES}`);
    const countriesArr = gottenCountries.data;
    let countriesMap = await countriesArr.map((c) => {
        let country = {
            name: c.name,
            id: c.alpha3Code,
            imagenFlag: c.flag,
            continent: c.region,
            capital: c.capital,
            subregion: c.subregion,
            area: c.area,
            population: c.population,
        };
        Country.findOrCreate({
            where: { id: c.alpha3Code },
            defaults: country,
        });
        return country;
    });
    return countriesMap
    }catch(err){
        return err
    }
}


async function getCountries (req, res, next){
    try{
    if(req.query.name){
        let countries = await axios.get(`${COUNTRIES_BY_NAME}${req.query.name}`);
        if (!countries) { return res.status(405).send("ningún país coincide con los datos ingresados, pruebe ingresando otros datos")}
        return res.send(countries.data);
    } else {
        await getAll();
        let all = await Country.findAll();
        return res.send(all);
    }
    }catch(err){
        next(err)
    }
}

async function getCountryById(req, res, next){
    try{
    if(req.params.id){
        let country = await Country.findAll({
            where: {
                id: req.params.id.toUpperCase(),
            },
            include:{
                model: Activity,
                attributes: ["id", "name", "dificultyLevel", "term", "season"],
                through: {
                    attributes: []
                }
            }
        });
        return res.send(country);
        }
    }catch(err){
        next(err);
    }
} 


module.exports = {
  getCountries,
  getCountryById,
};