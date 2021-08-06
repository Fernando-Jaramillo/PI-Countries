const { Router } = require("express");
const router = Router();
const {
  ALL_COUNTRIES,
  COUNTRIES_BY_NAME,
  ONE_COUNTRY_BY_CODE,
} = require("../../constants");
const { getAllCountries, getCountryById, } = require("../controllers/country");// importing Controllers

router.get("/", getAllCountries);
router.get("/:id", getCountryById
// function getCountryById(req, res, next){
//     axios.get(`${ONE_COUNTRY_BY_CODE}${req.params.id}`)
//         .then(response => res.send(response.data))
// }
);

module.exports = router;