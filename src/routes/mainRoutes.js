// src/routes/mainRoutes.js
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const mockUpController = require('../controllers/mockUpController');

// Heal check
router.get('/v1/heal-check', mainController.getHome);

// Mock up data
router.get('/v1/data', mockUpController.getAll);

module.exports = router;
