const express = require('express');
const router = express.Router();
const { register, login, logout, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { validate, authValidation } = require('../middleware/validate');

router.post('/register', authValidation.register, validate, register);
router.post('/login', authValidation.login, validate, login);
router.post('/logout', protect, logout);
router.get('/me', protect, getMe);
router.get('/check', protect, getMe);

module.exports = router; 