const express = require("express");

const userController = require("../controller/userController");


const router = express.Router();

router.post('/login', userController.login)
router.get('/getall', userController.getAll)
router.get('/getone', userController.getOne)

module.exports = router