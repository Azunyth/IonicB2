var router = require('express').Router();

router.get('/', function(req, res) {
    res.json('register');
});

module.exports = router;