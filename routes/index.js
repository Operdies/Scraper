var express = require('express');
var router = express.Router();

yo = function(req, res, next) {    
    res.render('index', { title: 'COOOOOOL' });
};
/* GET home page. */
router.get('/', yo);
router.get('/yo', yo);

module.exports = router;
