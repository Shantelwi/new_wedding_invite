const express = require('express');
const router = express.Router();

router.get('/location', (req, res) => {
    res.json({ title: 'Location', message: 'Find information about the location here.' });
});

module.exports = router;
