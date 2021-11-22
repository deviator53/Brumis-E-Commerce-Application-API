const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.json('Hello welcome to homepage')
})

module.exports = router;