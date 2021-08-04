const { Activity } = require('../db');

// esta función anade una actividad a la tabla

function addActivity( req, res, next){
    const {
        name,
        dificultyLevel,
        term,
        season} = req.body
    if(!req.body) return res.send({ error: 500, msg: "no has llenado todos los campos requeridos"})
    return Activity.create({id: id,
        name: name,
        dificultyLevel: dificultyLevel,
        term: term,
        season: season})
        .then(activity => res.send(activity))
        .catch(err => next(err))
}

module.exports = {
    addActivity
}
