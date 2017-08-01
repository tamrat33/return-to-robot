const express = require ('express');
const router = express.Router();
const users = require ('../models/data');

router.get ('/', function(req res) {
  users.findAll((data) => {
    res.render('index', {user:data});
  });
});
module.exports = router;
