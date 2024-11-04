const express = require('express');

const router = express.Router();

const { searchUsers, singleSearch } = require('../controllers/searchController');

// router.get('/', searchUsers);
router.get('/', singleSearch);

module.exports = router;