const { Router } = require('express');

// Importación de todos los routers;
const activityRouts = require('./activity');
const countryRouts = require('./country');

const router = Router();
// Configuración de Rutas

router.use("/activity", activityRouts);
router.use("/countries", countryRouts);

module.exports = router;
