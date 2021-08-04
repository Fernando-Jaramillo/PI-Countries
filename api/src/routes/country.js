const { Router } = require("express");
const router = Router();

const { getAllCountries, getCountryById, } = require("../controllers/country");// importing Controllers

router.get("/", getAllCountries);
router.get("/countries/:id", getCountryById);

module.exports = router;