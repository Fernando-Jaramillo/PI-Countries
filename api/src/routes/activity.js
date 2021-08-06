const { Router } = require('express');
const router = Router();

// importing Controllers
const { addActivity } = require('../controllers/activity');

router.post("/", addActivity);

module.exports = router;