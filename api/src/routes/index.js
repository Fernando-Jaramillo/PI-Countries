const { Router } = require('express');
const router = Router();


// Importación de todos los routers;
const activityRouts = require('./activity');
const countryRouts = require('./country');

// Configuración de Rutas
router.use("/countries", countryRouts);
router.use("/activity", activityRouts);

module.exports = router;
