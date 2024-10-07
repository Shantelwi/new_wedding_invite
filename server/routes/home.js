const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({title: 'Home Page', message: 'Welcome to our wedding website!' });
});

module.exports = router;