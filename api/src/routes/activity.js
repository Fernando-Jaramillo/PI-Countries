const { Router } = require('express');
const router = Router();

// importing Controllers
const { getActivity, addActivity } = require("../controllers/activity");

router.get("/", getActivity)
router.post("/", addActivity);

module.exports = router;