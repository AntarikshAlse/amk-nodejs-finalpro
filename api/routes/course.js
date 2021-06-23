const express = require('express');
const mongoose = require('mongoose');


const router = express.Router();
const controller = require('../controller/C_controller')


router.get("/",controller.get_course);

router.post("/",controller.create_course);

router.get("/:courseId",controller.get_course_byId);

router.put("/:courseId", controller.update_course);

router.delete("/:courseId",controller.delete_byId);

module.exports = router;