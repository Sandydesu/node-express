const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

router.get('/', UserController.getAllUsers.bind(this));

router.get('/:id', UserController.getById.bind(this));

router.post('/', UserController.createOrUpdateUser.bind(this));

router.put('/:id', UserController.createOrUpdateUser.bind(this));

router.delete('/:id', UserController.deleteByID.bind(this));

module.exports = router;