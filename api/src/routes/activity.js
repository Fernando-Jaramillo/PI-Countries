const { Router } = require('express');
const router = Router();

// importing Controllers
const { addActivity } = require('../controllers/activity')

router.post("/activity", addActivity);

module.exports = router;