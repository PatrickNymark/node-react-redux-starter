const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');

router.post('/login', login);
router.post('/register', register);

module.exports = router;

function login(req, res, next) {
  authService.login(req.body.email, req.body.password)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Password or email incorrect' }))
    .catch(err => next(err))
}

function register(req, res, next) {
  authService.register(req.body)
    .then(user => res.json(user))
    .catch(err => next(err))
}

module.exports = router; 