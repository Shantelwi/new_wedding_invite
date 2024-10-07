const express = require('express');
const router = express.Router();

router.get('/faqs',(req,res) => {
    res.json({title: 'Frequently Asked Questions' , message: 'These are answers to questions you may have.'})
});

module.exports = router;