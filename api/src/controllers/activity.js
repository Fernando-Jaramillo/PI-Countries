const { Activity, Country } = require("../db");
const { v4: uuidv4 } = require("uuid");

// esta función anade una actividad a la tabla

async function addActivity( req, res, next){
    const body = req.body;
    const id = uuidv4();
    const data = {...body, id}
    try{
        let createdActivity = await Activity.create(data)
        let foundCountry;
        await body.arrCountries.map( async (c) => {
            foundCountry =  await Country.findAll({where: { id : c.toUpperCase() }})
            await createdActivity.addCountry(foundCountry);
        })
        res.send(createdActivity);
    }catch (err){
        next(err);
    }
    // console.log(req.body)
    // Activity.create(req.body)
    //     .then(response => res.send(response))
    //     .catch(err => next(err))
}

module.exports = {
    addActivity,
}
