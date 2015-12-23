const models = require('../models');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    models.User.findAll({
	     include: [models.Task]
    }).then(function(users){
	     res.render('index',{
	        title: 'Express',
	        users: users
	  });
   });
});

router.post('/user', function(req, res) {
  models.User.create({
    username: "Roua"
  });
});

module.exports = router;
