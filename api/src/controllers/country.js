const { Country } = require('../db');

function getAllCountries (req, res, next){
    return Country.findAll()
        .then( countries => res.send(countries))
        .catch( err => next(err))
}

function getCountryById(req, res, next){
    return Country.findAll({
        where: {
            id : req.params.id
        }
    })
        .then( country => res.send(country))
        .catch( err => next(err))
} 

module.exports = {
  getAllCountries,
  getCountryById,
};