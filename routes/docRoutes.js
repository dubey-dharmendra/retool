const express = require("express");

const userController = require("../controller/userController");


const router = express.Router();

router.post('/login', userController.login)
router.get('/get', userController.getAll)

module.exports = router