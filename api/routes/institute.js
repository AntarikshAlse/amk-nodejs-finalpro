const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const controller = require('../controller/I_controller')

router.get("/",controller.get_institute)

router.post("/",controller.create_institute);

router.get("/:instituteId",controller.get_institute_byId);

router.put("/:instituteId", controller.update_institute);

router.delete("/:instituteId",controller.delete);

module.exports = router;