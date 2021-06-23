const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const controller = require('../controller/S_controller')


router.get("/",controller.get_student);

router.post("/",controller.create_student);

router.get("/:studentId",controller.get_student_byId);

router.put("/:studentId", controller.update_student);

router.delete("/:studentId",controller.delete);


module.exports = router;