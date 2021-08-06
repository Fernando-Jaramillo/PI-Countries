const { Activity } = require('../db');
const { v4: uuidv4 } = require("uuid");

// esta función anade una actividad a la tabla

async function addActivity( req, res, next){
    const body = req.body;
    const id = uuidv4();
    const data = {...body, id}
    try{
        let createdData = await Activity.create(data)
        return res.send(createdData)
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
